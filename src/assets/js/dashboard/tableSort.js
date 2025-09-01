let itemsPerPage = 6;
let currentPage = 1;
let totalPages;
let sortDirection = {};

function detectTableType() {
  const table = document.getElementById("sortableTable");

  // Check for data attribute first
  const tableType = table.getAttribute("data-table-type");
  if (tableType) {
    return tableType;
  }

  // Fallback to header detection (for backward compatibility)
  const firstHeaderText = table.querySelector("thead th").textContent.trim();
  if (firstHeaderText.includes("Product/Service")) return "products";
  if (firstHeaderText.includes("Invoices")) return "invoices";
  if (firstHeaderText.includes("Domain")) return "domains";

  return "unknown";
}

function getSortableValue(cell, columnIndex, tableType) {
  const cellText = cell.textContent.trim();

  switch (tableType) {
    case "products":
      switch (columnIndex) {
        case 0: // Product/Service
          return cell.querySelector("div.fw-bold")?.textContent || cellText;
        case 1: // Status
          return cellText;
        case 2: // Pricing
          return parseFloat(cellText.replace(/[^\d.]/g, "")) || 0;
        case 3: // Next Due Date
          return parseDateString(cellText);
        default:
          return cellText;
      }

    case "invoices":
      switch (columnIndex) {
        case 0: // Invoice #
          return cellText;
        case 1: // Invoice Date
          return parseDateString(cellText);
        case 2: // Due Date
          return parseDateString(cellText);
        case 3: // Total
          return parseFloat(cellText.replace(/[^\d.]/g, "")) || 0;
        case 4: // Status
          return cellText;
        default:
          return cellText;
      }

    case "domains":
      switch (columnIndex) {
        case 0: // Domain
          return cellText;
        case 1: // Status
          return cellText;
        case 2: // Auto Renew
          const checkbox = cell.querySelector('input[type="checkbox"]');
          return checkbox ? (checkbox.checked ? "1" : "0") : cellText;
        case 3: // Next Due Date
          return parseDateString(cellText);
        default:
          return cellText;
      }

    default:
      // Generic handling - try to detect data type
      if (cellText.match(/^\d{1,2}-\d{1,2}-\d{4}$/)) {
        return parseDateString(cellText);
      }
      if (cellText.match(/[\d.]+/)) {
        const numMatch = cellText.match(/[\d.]+/);
        if (numMatch) {
          return parseFloat(numMatch[0]) || 0;
        }
      }
      return cellText;
  }
}

function parseDateString(dateStr) {
  if (!dateStr || dateStr.trim() === "") return new Date(0);

  // Handle DD-MM-YYYY format
  const parts = dateStr.trim().split("-");
  if (parts.length === 3) {
    const day = parseInt(parts[0]);
    const month = parseInt(parts[1]) - 1; // Month is 0-indexed in JS
    const year = parseInt(parts[2]);
    return new Date(year, month, day);
  }

  return new Date(dateStr);
}

function getSortableData(columnIndex) {
  const table = document.getElementById("sortableTable");
  const tableType = detectTableType();
  const rows = Array.from(table.tBodies[0].rows);

  return rows.map((row) => {
    const cell = row.cells[columnIndex];
    const val = getSortableValue(cell, columnIndex, tableType);
    return { row, val };
  });
}

function sortTable(columnIndex) {
  const data = getSortableData(columnIndex);
  let direction = "asc";

  if (sortDirection[columnIndex] === "asc") {
    direction = "desc";
  } else {
    direction = "asc";
  }

  // Reset all sort icons
  const table = document.getElementById("sortableTable");
  const headers = table.querySelectorAll("thead th");
  headers.forEach((header, index) => {
    const iconDown = document.getElementById(`sortIcon${index}`);
    const iconUp = document.getElementById(`sortIcon${index}Up`);
    if (iconDown) iconDown.style.color = "#d0d0d0";
    if (iconUp) iconUp.style.color = "#d0d0d0";
  });

  // Sort the data
  data.sort((a, b) => {
    let aVal = a.val;
    let bVal = b.val;

    // Handle different data types
    if (aVal instanceof Date && bVal instanceof Date) {
      return direction === "asc" ? aVal - bVal : bVal - aVal;
    }

    if (typeof aVal === "number" && typeof bVal === "number") {
      return direction === "asc" ? aVal - bVal : bVal - aVal;
    }

    // String comparison
    aVal = String(aVal).toLowerCase();
    bVal = String(bVal).toLowerCase();

    if (direction === "asc") {
      return aVal < bVal ? -1 : aVal > bVal ? 1 : 0;
    } else {
      return aVal > bVal ? -1 : aVal < bVal ? 1 : 0;
    }
  });

  // Update the table with sorted data
  const sortedBody = document.querySelector(".table-body");
  sortedBody.innerHTML = "";
  data.forEach((item) => sortedBody.appendChild(item.row));

  // Update sort icons
  const sortIconDown = document.getElementById(`sortIcon${columnIndex}`);
  const sortIconUp = document.getElementById(`sortIcon${columnIndex}Up`);
  if (sortIconDown && sortIconUp) {
    if (direction === "asc") {
      sortIconDown.style.color = "#d0d0d0";
      sortIconUp.style.color = "black";
    } else {
      sortIconDown.style.color = "black";
      sortIconUp.style.color = "#d0d0d0";
    }
  }

  sortDirection[columnIndex] = direction;
  renderTable(1); // Reset to first page after sorting
}

function renderTable(page) {
  currentPage = page;
  const tableBody = document.querySelector(".table-body");
  const rows = Array.from(tableBody.querySelectorAll("tr"));
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  rows.forEach((row, index) => {
    row.style.display = index >= start && index < end ? "" : "none";
  });

  renderPagination();
  updatePaginationInfo();
}

function renderPagination() {
  const paginationList = document.getElementById("paginationList");
  if (!paginationList) return;

  paginationList.innerHTML = "";
  const totalRows = document.querySelector(".table-body").children.length;
  totalPages = Math.ceil(totalRows / itemsPerPage);

  // Don't show pagination if there's only one page
  if (totalPages <= 1) return;

  for (let i = 1; i <= totalPages; i++) {
    const li = document.createElement("li");
    li.className = `page-item ${i === currentPage ? "active" : ""}`;
    const link = document.createElement("a");
    link.className = "page-link rounded-2";
    link.href = "#";
    link.textContent = i;
    link.onclick = (e) => {
      e.preventDefault();
      renderTable(i);
    };
    li.appendChild(link);
    paginationList.appendChild(li);
  }
}

function updatePaginationInfo() {
  const paginationInfo = document.getElementById("paginationInfo");
  if (!paginationInfo) return;

  const totalRows = document.querySelector(".table-body").children.length;
  const start = (currentPage - 1) * itemsPerPage + 1;
  const end = Math.min(start + itemsPerPage - 1, totalRows);
  paginationInfo.textContent = `Showing ${start} to ${end} of ${totalRows} results`;
}

function initializeTable() {
  // Reset sort directions
  sortDirection = {};

  // Render initial table
  renderTable(currentPage);

  // Add click listeners to sortable headers
  const table = document.getElementById("sortableTable");
  if (!table) return;

  const tableHeaders = table.querySelectorAll(".table-header th");
  tableHeaders.forEach((header, index) => {
    // Check if header has sort icons (is sortable)
    const hasSortIcons = header.querySelector(".sort-icons");
    if (hasSortIcons) {
      header.style.cursor = "pointer";
      header.addEventListener("click", () => {
        sortTable(index);
      });
    }
  });
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  initializeTable();
});

// Also provide a function to reinitialize if needed
window.reinitializeTable = initializeTable;

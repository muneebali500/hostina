export default function createHeader() {
  return `
    <header class="py-3 shadow-sm bg-black d-flex align-items-center">
      <div class="main-container">
        <nav class="navbar navbar-expand-lg p-0">
          <!-- Logo on the left -->
          <a class="navbar-brand d-flex align-items-center me-auto" href="/">
            <img
              src="/images/logo.png"
              alt="Hostina Logo"
              width="40"
              class="me-2"
              loading="lazy"
            />
            <h4 class="m-0 text-white">Hostina</h4>
          </a>

          <!-- Hamburger menu for mobile -->
          <button
            class="navbar-toggler ms-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="bi bi-list"></i>
          </button>

          <!-- Navigation content that will collapse -->
          <div class="collapse navbar-collapse" id="navbarContent">
            <!-- Navigation in the center - will stack on mobile -->
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item px-3 dropdown">
                <a
                  class="nav-link d-flex align-items-center gap-3"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Domains <i class="fas fa-angle-down"></i>
                </a>
                <ul class="dropdown-menu bg-black border">
                  <li><a class="dropdown-item" href="#">Domain Search</a></li>
                  <li><a class="dropdown-item" href="#">Domain Transfer</a></li>
                  <li><a class="dropdown-item" href="#">Domain Pricing</a></li>
                </ul>
              </li>
              <li class="nav-item px-3 dropdown">
                <a
                  class="nav-link d-flex align-items-center gap-3"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Hosting <i class="fas fa-angle-down"></i>
                </a>
                <ul class="dropdown-menu bg-black border">
                  <li><a class="dropdown-item" href="#">Shared Hosting</a></li>
                  <li><a class="dropdown-item" href="#">VPS Hosting</a></li>
                  <li>
                    <a class="dropdown-item" href="#">Dedicated Servers</a>
                  </li>
                </ul>
              </li>
              <li class="nav-item px-3 dropdown">
                <a
                  class="nav-link d-flex align-items-center gap-3"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Services <i class="fas fa-angle-down"></i>
                </a>
                <ul class="dropdown-menu bg-black border">
                  <li>
                    <a class="dropdown-item" href="#">SSL Certificates</a>
                  </li>
                  <li><a class="dropdown-item" href="#">Website Builder</a></li>
                  <li><a class="dropdown-item" href="#">Email Hosting</a></li>
                </ul>
              </li>
              <li class="nav-item px-3">
                <a class="nav-link" href="/about.html">Contact Us</a>
              </li>
              <li class="nav-item px-3">
                <a class="nav-link" href="#">Help</a>
              </li>
            </ul>

            <!-- Dropdown items on the right - will stack on mobile -->
            <div class="d-flex align-items-center gap-3">
              <div class="dropdown country-dropdown">
                <select class="language-selector px-3">
                  <option value="USA">
                    <i class="bi bi-flag-fill me-2"></i>USA
                  </option>
                  <option value="Pak">
                    <i class="bi bi-flag-fill me-2"></i>Pak
                  </option>
                  <option value="UK">
                    <i class="bi bi-flag-fill me-2"></i>UK
                  </option>
                </select>
              </div>
              <div class="dropdown">
                <span
                  class="dropdown-toggle text-decoration-none d-flex align-items-center gap-2"
                  data-bs-toggle="dropdown"
                >
                  <i class="fa-solid fa-user"></i>
                  <span>Account</span>
                  <i class="fas fa-angle-down"></i>
                </span>
                <ul class="dropdown-menu dropdown-menu-end bg-black border">
                  <li>
                    <a class="dropdown-item text-white" href="#">My Profile</a>
                  </li>
                  <li>
                    <a class="dropdown-item text-white" href="#">Settings</a>
                  </li>
                  <li><hr class="dropdown-divider" /></li>
                  <li>
                    <a class="dropdown-item text-white" href="#">Logout</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>`;
}

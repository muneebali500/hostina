export default function createFooter() {
  return `
    <footer class="section-padding position-relative">
      <div class="main-container" data-animate="fadeInUp">
        <div class="content row g-4">
          <div class="col-lg-4 mt-0">
            <div class="d-flex align-items-center gap-3 mb-4">
              <img
                src="/images/logo.png"
                alt="Hostina Logo"
                loading="lazy"
                class=""
                style="width: 10%"
              />
              <h4 class="m-0 text-white fs-3">Hostina</h4>
            </div>
            <p class="fs-4">
              Empowering your online presence with reliable hosting, expert
              support, and honest pricing. Join thousands who trust us to keep
              their websites secure, fast, and always online.
            </p>
          </div>
          <div class="col-lg-8 row g-4 g-lg-0">
            <div class="col-lg-3 col-6">
              <h4 class="nav-title">Services</h4>
              <ul>
                <li><a href="#">Register Domain</a></li>
                <li><a href="">Transfer Domain</a></li>
                <li><a href="">Domain Search</a></li>
              </ul>
            </div>
            <div class="col-lg-3 col-6">
              <h4 class="nav-title">Hosting</h4>
              <ul>
                <li><a href="">Shared Hosting</a></li>
                <li><a href="">WordPress Hosting</a></li>
                <li><a href="">Reseller Hosting</a></li>
              </ul>
            </div>
            <div class="col-lg-3 col-6">
              <h4 class="nav-title">Services</h4>
              <ul>
                <li><a href="">Virtual Private Servers</a></li>
                <li><a href="">Dedicated Servers</a></li>
                <li><a href="">Game Servers</a></li>
              </ul>
            </div>
            <div class="col-lg-3 col-6">
              <h4 class="nav-title">Contact Us</h4>
              <ul>
                <li>
                  <a
                    href="mailto:contact@company.com"
                    class="d-flex gap-2 align-items-center"
                    ><i class="fa-solid fa-envelope"></i> contact@company.com</a
                  >
                </li>
                <li>
                  <a
                    href="tel:(414) 687 - 5892"
                    class="d-flex gap-2 align-items-center"
                    ><i class="fa-solid fa-phone"></i> (414) 687 - 5892</a
                  >
                </li>
                <li>
                  <a href="#" class="d-flex gap-2 align-items-center"
                    ><i class="fa-solid fa-location-dot"></i> 794 Mcallister</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>

        <ul class="social-links d-flex align-items-center gap-3">
          <li class="social-item">
            <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
          </li>
          <li class="social-item">
            <a href="#"><i class="fa-brands fa-youtube"></i></a>
          </li>
          <li class="social-item">
            <a href="#"><i class="fa-brands fa-instagram"></i></a>
          </li>
        </ul>

        <div class="copyright-text border-top col-lg-6 mx-auto">
          <p class="fw-bold pt-4 text-center mb-0">
            2025 Hostina. All Copyrights reserved.
          </p>
        </div>

        <figure class="position-absolute start-0 bottom-0" style="width: 15%">
          <img src="/images/vector-334.png" alt="Vector" loading="lazy" />
        </figure>

        <div class="dots">
          <div></div>
          <div></div>
        </div>
      </div>
    </footer>`;
}

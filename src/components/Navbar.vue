<template>
  <div class="Navbar">
    <nav
      id="nav"
      class="navbar navbar-expand-lg mb-5"
      style="background-color: #deedeb"
    >
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">Navbar</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link"
                to="/profile"
                v-if="$store.state.isAthenticated"
                >Profile</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link"
                to="/add"
                v-if="$store.state.isAthenticated"
                >Write an article</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link"
                to="/login"
                v-if="!$store.state.isAthenticated"
                >Login</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link"
                to="/register"
                v-if="!$store.state.isAthenticated"
                >Register</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link"
                to="/logout"
                v-if="$store.state.isAthenticated"
                >Logout</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">About</router-link>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                Dropdown
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "Navbar",
};
</script>
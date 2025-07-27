<template>
  <nav class="navbar shadow-md bg-transparent backdrop-blur-md border-none max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" aria-label="Toggle menu" aria-expanded="false" aria-controls="mobile-menu" class="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
      </div>
      <a href="/" class="text-xl text-[#485a3d] font-semibold">AUSTYN WASHINGTON</a>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu capitalize text-[#485a3d] menu-horizontal px-1">
        <li><a href="/about">ABOUT</a></li>
        <li><a href="/work">WORK</a></li>
        <li><a href="/contact">CONTACT</a></li>
      </ul>
    </div>
    <div class="navbar-end text-[#485a3d]">
      <a href="/resume.pdf" download class="btn btn-ghost capitalize">
        <span>RESUME</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4">
          <path fill-rule="evenodd" d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z" clip-rule="evenodd" />
        </svg>
      </a>
      <!-- Mail Icon -->
      <a href="mailto:your-email@example.com" aria-label="Email" class="btn btn-ghost btn-sm">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
          <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
          <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
        </svg>
      </a>
      <!-- LinkedIn Icon -->
      <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" class="btn btn-ghost btn-sm">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#0A66C2" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M19 3H5C3.895 3 3 3.895 3 5V19C3 20.105 3.895 21 5 21H19C20.105 21 21 20.105 21 19V5C21 3.895 20.105 3 19 3Z" fill="currentColor"/>
          <path d="M7.5 18H5V9H7.5V18ZM6.25 7.672..." fill="white"/>
        </svg>
      </a>
      <!-- GitHub Icon -->
      <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" aria-label="GitHub" class="btn btn-ghost btn-sm">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017C2 16.44 4.865 20.18 8.839 21.5C9.339 21.586 9.5 21.272 9.5 21V19.5C6.5 20 5.5 18 5.5 18C4.9 17 4 16.5 4 16.5C3 15.5 4.5 15.5 4.5 15.5C5.5 15.5 6 16.5 6 16.5C7 18 8 18.5 9.5 18C9.5 17.5 9.6 17 9.8 16.7C7.1 16.3 4.5 15 4.5 11C4.5 9.7 5 8.6 6 7.8C5.9 7.5 5.5 6.4 6 5C6 5 7 4.8 9.5 6.3C10.6 6 11.8 5.9 13 6C14.2 5.9 15.4 6 16.5 6.3C19 4.8 20 5 20 5C20.5 6.4 20.1 7.5 20 7.8C21 8.6 21.5 9.7 21.5 11C21.5 15 18.9 16.3 16.2 16.7C16.4 17 16.5 17.5 16.5 18V21C16.5 21.272 16.661 21.586 17.161 21.5C21.135 20.18 24 16.44 24 12.017C24 6.484 19.523 2 12 2Z"/>
        </svg>
      </a>
    </div>
  </nav>
</template>
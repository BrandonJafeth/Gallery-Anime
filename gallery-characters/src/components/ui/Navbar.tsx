function Navbar() {
  return (
    <nav className="bg-gray-700 border-gray-200 dark:bg-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://static.vecteezy.com/system/resources/thumbnails/051/596/000/small_2x/buchigiri-anime-girl-png.png" className="h-8" alt="Flowbite Logo" />

        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

        </div>
      </div>
    </nav>
  );
}

export default Navbar;

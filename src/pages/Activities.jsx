import { Link } from 'react-router-dom';

function Activities() {
  return (
    <div className="max-w-[1140px] m-auto w-full md:flex mt-0">
      <Link to="/resorts" className="relative p-4">
        <div className="relative">
          <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold">
            Resorts
          </h3>
          <img 
            className="w-full h-full object-cover relative border-4 border-white shadow-lg" 
            src="https://images.unsplash.com/photo-1602002418679-43121356bf41?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmVzb3J0cyUyMG1hbGRpdmVufGVufDB8fDB8fHwy" 
            alt="Resorts"
          />
        </div>
      </Link>

      <Link to="/cruises" className="relative p-4">
        <div className="relative">
          <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold">
            Cruises
        </h3>
        <img 
          className="w-full h-full object-cover relative border-4 border-white shadow-lg" 
          src="https://images.unsplash.com/photo-1599640842225-85d111c60e6b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGNydWlzZXxlbnwwfHwwfHx8Mg%3D%3D" 
          alt="Cruises"
          />
        </div>
      </Link>

      <Link to="/excursions" className="relative p-4">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold">
          Excursions
        </h3>
        <img 
          className="w-full h-full object-cover relative border-4 border-white shadow-lg" 
          src="https://images.unsplash.com/photo-1682687982502-1529b3b33f85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2N1YmElMjBkaXZpbmd8ZW58MHx8MHx8fDI%3D" 
          alt="Excursions"
        />
      </Link>
    </div>
  );
}

export default Activities;
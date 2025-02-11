import { LogOut } from "lucide-react";
import PropTypes from 'prop-types';
// import { useState } from "react";
// import { setLoggedInUser } from "../../utils/localStorage";


const Header = () => {
  // const [userName, setUserName] = useState('')
  
  // if(!EmpData){
  //   setUserName("admin");
  // } else{
  //   setUserName(EmpData.firstName)
  // }

  const handleLogOutBtn = () => {
    localStorage.setItem("loggedInUser","");
    window.location.reload()
  }

  return (
    <div className="flex items-center justify-between px-20 pt-10">
      <h1 className="text-2xl font-semibold">
        Hii <br /> <span className="text-4xl font-bold">userName 👋</span>
      </h1>

      <button className="group bg-transparent transition-all duration-300">
        <LogOut
          onClick={handleLogOutBtn}
          size={20}
          className="transition-transform duration-300 group-hover:translate-x-1 text-red-700"
        />
      </button>
    </div>
  );
};

// Header.propTypes = {
//   EmpData: PropTypes.shape({
//     firstName: PropTypes.string.isRequired,
//   }).isRequired,
// };

export default Header;

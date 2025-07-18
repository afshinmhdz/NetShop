import { HiBars3BottomLeft } from "react-icons/hi2";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsHandbag } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";
import { FiBell } from "react-icons/fi";
function Navbar() {
  return (
    <div className="grid grid-cols-3 items-baseline mt-0 p-1 ">
      <div>
        <ul
          className="flex items-center gap-x-4 content-center
                "
        >
          <li>
            <button>
              <HiBars3BottomLeft className="svgSize" />
            </button>
          </li>
          <li>
            <button>
              <IoSearchOutline className="svgSize" />
            </button>
          </li>
        </ul>
      </div>
      <div className="">
        <h1 className="text-3xl">NetWork</h1>
      </div>
      <div>
        <ul dir="rtl" className="flex items-center gap-x-4">
          <li>
            <button>
              <BsHandbag className="svgSize" />
            </button>
          </li>
          <li>
            <button>
              <IoMdHeartEmpty className="svgSize" />
            </button>
          </li>
          <li>
            <button>
              <FiBell className="svgSize" />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

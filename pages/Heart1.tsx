import Link from "next/link";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Heart1() {
  <script src="./hendle.js"></script>
  return (
    <div
     id="header"
      className="bg-white h-20 w-full m-0 p-0 flex justify-between  top-0"
      style={{
        boxShadow: "5px 5px 2px 1px rgb(209, 212, 214)",
      }}
    >
        <div className="text-pink-500 font-bold w-56 leading-10 mt-4 ml-4 text-center text-5xl">Vgo_Food</div>


        <div className="mt-6 flex">
            <div>
                <i>
                <FontAwesomeIcon icon={faCartArrowDown} 
                  className='leading-6'
                  style={{ fontSize: 20, color: "black" ,marginRight:"12px" ,marginTop:"7px"}}  />
                </i>
            </div>
            <div className="w-44 h-9 pt-2 pl-3 leading-4 mr-8 border hover:bg-pink-100 hover:text-pink-900" >
                <button > <Link href="/dangnhap" >Đăng nhập/Đăng ký</Link>   </button>
            </div>
        </div>
    </div>
    
  );

}

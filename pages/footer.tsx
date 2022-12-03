import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
// import the icons you need
import { faArrowDown,faFaceGrin ,faFaceAngry ,faFaceGrinStars} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <div className="w-full h-90 bg-pink-400">
      <div className="flex pb-10 justify-around  border-b border-gray-300  ">
        <div className=" w-52 border-pink-500 h-28">
          <div className="font-bold text-5xl mt-14 text-white">Vgo_Food</div>
        </div>

        <div className="mt-14 border w-14 h-9 p-2 hover:bg-pink-100 hover:text-xl mr-10">
          <button className="flex " >
            {" "}
            <span>VI</span>
            <i>
              <FontAwesomeIcon
                icon={faArrowDown}
                className="leading-6 "
                style={{ fontSize: 16, color: "black", marginLeft: "4px" }}
              />
            </i>{" "}
          </button>
        </div>
      </div>

      {/* the 2 */}
      <div className="flex justify-around pb-8" >
        {/* hang 1 */}
        <div className="mt-10" >
          <h1 className="text-2xl text-white mt-4 hover:text-black mb-4" >Về VnFood</h1>
          <h1 className="text-2xl text-white mt-4 hover:text-black mb-4">Về tài xế</h1>
          <h1 className="text-2xl text-white mt-4 hover:text-black mb-4">Blog</h1>
        </div>
        

        {/* dong 2 */}
        <div className="mt-10" >
          <h1 className="text-2xl text-white mt-4 hover:text-black mb-4" >Mở quán trên VnFood</h1>
          <h1 className="text-2xl text-white mt-4 hover:text-black mb-4">Trở thành tài xế</h1>
          <h1 className="text-2xl text-white mt-4 hover:text-black mb-4">Các event</h1>
        </div>
        {/* hang 3 */}
        <div className="mt-10" >
          <h1 className="text-2xl text-white mt-4 hover:text-black mb-4" >Trung tâm hỗ trợ</h1>
          <h1 className="text-2xl text-white mt-4 hover:text-black mb-4">Câu hỏi thường gặp</h1>
          <h1 className="text-2xl text-white mt-4 mb-4"></h1>
        </div>
            
               {/*  */}
          <div className="mt-10 flex" >
          <h1 className="text-2xl text-white mt-4 hover:text-black mb-4" ><i>
              <FontAwesomeIcon
                icon={faFaceAngry}
                className="leading-6 "
                style={{ fontSize: 32, color: "green", margin: "4px" }}
              />
            </i></h1>
          <h1 className="text-2xl text-white mt-4 hover:text-black mb-4">
          <i>
              <FontAwesomeIcon
                icon={faFaceGrin}
                className="leading-6 "
                style={{ fontSize: 32, color: "yellow", margin: "4px" }}
              />
            </i>
          </h1>
          <h1 className="text-2xl text-white hover:text-black mt-4 mb-4"><i>
              <FontAwesomeIcon
                icon={faFaceGrinStars}
                className="leading-6 "
                style={{ fontSize: 32, color: "blue", margin: "4px" }}
              />
            </i></h1>
        </div>
      </div>

      {/* the 3 */}
      <div className="flex justify-around border-t " >
        <div className="mt-10">
          <Image
          src="/bottomC.svg"
          alt="me"
          width="200"
          height="200"
          />
          <Image
          src="/CH.svg"
          alt="me"
          width="200"
          height="200"
          />
        </div>
        <div className="flex mt-48" >
          <p className="mr-4 text-white" >@2023 Vgo_Food</p>
          
          <p className="text-white" > Câu hỏi thường gặp * </p>
          <p className="text-white"> Chính sách bảo mật</p>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link"
import Image from "next/image"
// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import the icons you need
import {faCheck,faCab} from "@fortawesome/free-solid-svg-icons";

export default function Main1(){
   return (
    <div id="new" className="w-full h-100vh mr-14 mt-32">
       <div className=" mt-14 ml-10 w-11/12 h-100vh">
             <h1 className="w-full block text-5xl flex " >Tại sao nên lựa chọn  <h2 className="text-pink-500 font-bold">  Vgo_Food  ?</h2></h1>
             <div >
               <p  className="leading-10 mt-10 flex"><i>
                  <FontAwesomeIcon icon={faCheck} 
                  className='leading-6'
                  style={{ fontSize: 16, color: "green" }}  />
                  </i>
                  
                  <span className="font-bold "> Nhanh nhất </span>
                  <p>
                   - Vgo_Food cung cấp dịch vụ giao đồ ăn nhanh nhất thị trường
                  </p>

                  </p>
             </div>

             <div  >
               <p  className="leading-6 flex mt-3"><i>
                  <FontAwesomeIcon icon={faCheck} 
                  className='leading-6'
                  style={{ fontSize: 16, color: "green" }}  />
                  </i>
                  <span className="font-bold w-48 text-46 "> Dễ dàng nhất </span>
                  <p className="mr-10 text-left " >
                  -Giờ đây, bạn chỉ cần thực hiện vài cú nhấp chuột hoặc chạm nhẹ là đã có thể đặt đồ ăn. 
                  Hãy đặt đồ ăn trực tuyến hoặc tải xuống siêu ứng dụng VnFood của chúng tôi để có trải nghiệm
                   nhanh hơn và thú vị hơn.
                  </p>

                  </p>
             </div>

             <div >
               <p  className="leading-6 flex mt-4"><i>
                  <FontAwesomeIcon icon={faCheck} 
                  className='leading-6'
                  style={{ fontSize: 16, color: "green" }}  />
                  </i>
                  <span className="font-bold w-52 "> Đáp ứng mọi nhu cầu  </span>
                  <p className="mr-10 mr-10" >
                  - Từ món ăn đặc sản địa phương đến các nhà hàng được ưa thích, 
                  nhiều lựa chọn đa dạng chắc chắn sẽ luôn làm hài lòng khẩu vị của bạn.
                  </p>

                  </p>
             </div>

             <div >
               <p  className="leading-6 flex mt-4"><i>
                  <FontAwesomeIcon icon={faCheck} 
                  className='leading-6'
                  style={{ fontSize: 16, color: "green" }}  />
                  </i>
                  <span className="font-bold w-40 "> Thanh toán dễ dàng </span>
                  <p className="mr-10 mr-10" >
                  - Giao và nhận đồ ăn thật dễ dàng. Thanh toán bằng GrabPay thậm chí còn dễ dàng hơn nữa.
                  </p>

                  </p>
             </div>

             <div >
               <p  className="leading-6 flex mt-4"><i>
                  <FontAwesomeIcon icon={faCheck} 
                  className='leading-6'
                  style={{ fontSize: 16, color: "green" }}  />
                  </i>
                  <span className="font-bold w-40 "> Nhiều quà tặng hơn </span>
                  <p className="mr-10 mr-10" >
                  - Tích điểm GrabRewards cho mỗi đơn hàng của bạn và sử dụng điểm thưởng để đổi lấy nhiều ưu đãi hơn.
                  </p>

                  </p>
             </div>
             
          <div className="w-full mt-10 ml-10 mt-10">
          <h1 className="w-full block text-4xl flex  " >Các câu hỏi thường gặp</h1>
          <h1 className="w-full block text-3xl flex mt-10 mb-6 " > <span className="text-pink-500 font-bold">Vgo_Food  </span> - là gì?</h1>
          <p className="mr-10">
          Lunch, Bún Cá Chấm Gốc Đa - Vũ Thạnh for Dinner! We are here to satisfy your hunger
           with a wide selection of merchant partners in Korea. GrabFood là dịch vụ Giao đồ
            ăn nhanh nhất tại Korea. Chúng tôi đã sắp xếp tất cả các món ăn, nhà hàng và thực 
            phẩm yêu thích của bạn một cách hợp lý để giúp bạn tìm được đồ ăn dễ dàng và nhanh chóng 
            nhất có thể. Tìm và đặt món ăn yêu thích trên khắp Việt Nam - đặt đồ ăn trực tuyến chỉ 
            bằng vài thao tác, từ món Lifted Coffee & Brunch cho bữa sáng, đến Maazi Indian –        
            Nhà Hàng Ấn Độ cho bữa trưa, đến Bún Cá Chấm Gốc Đa – Vũ Thạnh cho bữa tối! Hãy để 
            chúng tôi xua tan cơn đói của bạn nhờ một loạt đối tác bán đồ ăn Việt Nam ở Hàn Quốc .
          </p>

          <button className="mt-14 w-full border border-black hover:border-pink-500 mr-10 rounded-md text-center py-4 px-92 mb-8 ">Read More</button>
          </div>
           



         </div>
    </div>
   )

}



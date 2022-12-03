import Link from "next/link";
import Image from "next/image";
// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Main2() {
  return (
    <div className="w-full bg-gray-100 h-100vh pt-32 pb-32 flex justify-around">
      <div className="w-80">
        <div className="ml-10">
          <Image
            className="rounded-full w-52 h-52  "
            src="/png1.svg"
            alt="me"
            width="230"
            height="230"
          />
        </div>
        <h1 className="text-center mt-5 font-bold mb-5">Curated restaurants</h1>
        <p>
          From small bites to big meals, we won't limit your appetite. Go ahead
          and order all you want.
        </p>
      </div>

      <div className="w-80">
        <div className=" ml-9 w-52 h-52 border bg-green-300 rounded-full">
          <Image
            className="rounded-full w-52 h-52  "
            src="/png2.svg"
            alt="me"
            width="230"
            height="230"
          />
        </div>
        <h1 className="text-center mt-5 font-bold mb-5">
          More cool features available on the app
        </h1>
        <p>
          From small bites to big meals, we won't limit your appetite. Go ahead
          and order all you want.
        </p>
        <div className="w-80 flex  justify-between">
          <div>
            <Image src="/bottomC.svg" alt="me" width="200" height="200" />
          </div>

          <div>
            <Image src="/CH.svg" alt="me" width="200" height="200" />
          </div>
        </div>
      </div>
    </div>
  );
}

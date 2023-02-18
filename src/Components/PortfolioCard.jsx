import React from "react";

const PortfolioCard = (props) => {
  return (
    <div>
      <a href="#" className="group relative block bg-black rounded-2xl">
        <img
          alt="Developer"
          src={props.image}
          className="absolute inset-0 h-full w-full object-cover opacity-60 transition-opacity group-hover:opacity-40 rounded-2xl"
        />

        <div className="relative p-8">
            <div>
          <p className="text-sm font-bold uppercase tracking-widest  text-White">
            {props.filter}
          </p>

          <p className="text-2xl font-bold text-white">{props.name}</p>
            </div>
          <div className="mt-52">
            <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
              {/* <p className="text-sm text-white">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
          perferendis hic asperiores quibusdam quidem voluptates doloremque
          reiciendis nostrum harum. Repudiandae?
        </p> */}
              <button className="py-2 px-5 rounded-lg  bg-[#39B54A]">Visit Project</button>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default PortfolioCard;

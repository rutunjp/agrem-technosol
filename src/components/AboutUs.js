import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-white py-10 lg:py-20 rounded-lg shadow-md p-8 m-3 transform hover:-translate-y-2 transition duration-300 ease-in-out">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              AGR<span style={{ color: "rgb(20, 175, 160)" }}>E</span>M
              Technosol
            </h2>

            <p className="mt-4 text-lg text-gray-500">
              AGREM Technosol offers combined 30 year plus experience on sensing
              technologies, manufacturing and applications for Industrial,
              Aerospace, Military, Naval, Oil and Gas, Transportation, and other
              demanding applications. We work closely with end customers
              understanding their application and diligently provide
              cost-effective solutions for every measurement need, whether it be
              standard sensors or semi-custom or full custom products.
            </p>
            <p className="mt-4 text-lg text-gray-500">
              Our sensors use a variety of thin film, piezoelectric, and MEMs
              based piezoresistive technologies to provide solutions for
              acceleration, level, pressure, temperature, vibration, LVDT, and
              others. Our team provides a high level of support in the industry
              with quality products, technical and applications support for
              every demanding sensing need from deep sea to space using the
              latest sensing technologies.
            </p>
            <p className="mt-4 text-lg text-gray-500">
              We are investing in setting up an advanced facility for "Assembly,
              Calibration & Testing" of various sensors in India, under
              Technology Transfer and Support from leading global manufacturers
              under the "Make in India initiative". From Sensors to IoT, we have
              it all delivered...
            </p>
          </div>
          <div className="mt-10 lg:mt-0">
            <img
              className="m-h-64 object-fit mix-blend-multiply max-w-64  mx-auto lg:mx-0"
              src="/AgremLogo.jpg"
              alt="About Us"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

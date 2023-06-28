import ProductModal from './ProductModal'

export default function ProductCard(params) {
  return (
    <div
      href="#"
      class="flex flex-col items-center bg-white text-black  border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl"
    >
      <img
        className="object-cover  w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        src="/sensor.png"
        alt="ds"
      />
      <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight">MODEL 2000</h5>
        <h6 class="mb-2   normal-case text-md opacity-70    tracking-tight   ">
          Aerospace grade un-amplified pressure transducer
        </h6>

        <p class="mb-3 font-regular opacity-90  ">
          Model 2000 is designed to provide high-accuracy measurements of
          +/-0.1% FSO. Ideal for use within demanding aerospace and defense
          applications, including high shock and vibration.
        </p>
        <div className="flex flex-row justify-between px-2 ">
          <h5 class="mb-2 text-2xl font-medium tracking-tight">$2000</h5>
          <ProductModal />{' '}
          <button
            href="#"
            class="inline-flex w-fit items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  )
}

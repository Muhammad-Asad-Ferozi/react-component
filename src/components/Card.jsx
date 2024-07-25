export default function Card() {
  return (
    <>
      <div className=" bg-primary rounded-xl  min-w-96 py-7 shadow-lg hover:shadow-orange-200 duration-500 transition-all">
        <div className=" h-64 overflow-hidden max-w-80 mx-auto rounded-t-xl ">
        <img className="" src="/src/assets/AsadFerozi.png" alt="pic" />
        </div>
        <div className="flex max-w-80 m-auto rounded-b-xl bg-primary-dark flex-col text-white justify-center items-center">
            <div className="flex items-center justify-center flex-col mt-3">
                <h3 className="text-3xl font-bold gap-3">Asad Ferozi</h3>
                <p className="text-orange-300">Software engineer</p>
                <p className="font-light">window.com</p>
            </div>
            <div className="flex items-center justify-center gap-12 my-5 ">
                <a href="#" className="btn hover:bg-primary-darker hover:text-forth bg-white transition-all duration-300 py-1 px-3 rounded-lg text-primary">Email</a>
                <a href="#" className=" btn hover:bg-primary hover:text-blue-400 bg-blue-400 transition-all duration-500 py-1 px-3 rounded-lg text-white">Lindein</a>

            </div>
            <div className="flex justify-center items-center flex-col px-5 gap-5 pb-3">
                <div>
                <h3 className="text-xl font-semibold ">About</h3>
                <p className="text-xs">Lorem ipsum span  dolor sit, ametndi, expedita totam delectus magni accusamus vitae recusandaeodi aspernatur blanditiis con</p>
                </div>
                <div>
                <h3 className="text-xl font-semibold">Interest</h3>
                <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicinlaboriosam minus sit delectus ullam architecto modi!</p>
                </div>
            </div>
            <div className="flex justify-around bg-primary-darker w-full rounded-b-xl  py-3">
                <img className="img" src="tw.png" alt="twitter" /><img className="img" src="fb.png" alt="face" /><img className="img" src="git.png" alt="github" /><img className="img" src="in.png" alt="insta" />
            </div>
        </div>
      </div>
    </>
  );
}

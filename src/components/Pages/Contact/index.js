import Footer from "../../Footer";
import Header from "../../Header";

const teamate = [
  {
    name:'Hà Phan Thiên Phú',
    position: 'Founder / CEO',
    image:'https://i.ibb.co/DLGjKkZ/phu.jpg',
    facebook:"https://www.facebook.com/thin.phiu/"
  },
  {
    name:'Lương Hồng Tiến Đạt',
    position: 'Co-founder / Chef',
    image:'https://i.ibb.co/fk5JFCc/dat.jpg',
    facebook:'https://www.facebook.com/tiendatluonghong'
  },
  {
    name:'Hà Trung Kiên',
    position: 'Co-founder / Waiter',
    image:'https://i.ibb.co/sqRMrTx/kien.jpg',
    facebook:'https://www.facebook.com/profile.php?id=100009623600721'

  },
  {
    name:'Làu Lâm Tường',
    position: 'Co-founder / Cashier',
    image:'https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/311917656_2137019219833329_7638157290069035194_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=5vTbSfJdCWEAX8qHyGc&_nc_ht=scontent.fsgn13-2.fna&oh=00_AfBHPB2W0K2lmgye-1LgrcZBU7MVEB6lhscNa94jF_TCeA&oe=63B5D2B5',
    facebook:'https://www.facebook.com/t'
  },
  {
    name:'Nguyễn Huy Hoàng',
    position: 'Co-founder / Manager',
    image:'https://i.ibb.co/w0C5fRk/hoang.jpg',
    facebook:'https://www.facebook.com/hoang.nguyen030902'
  },
]


export default function Contact() {
    return (
      <>
      <Header/>

        <div className="max-w-screen-xl px-4 mx-auto md:px-8 pt-32">
          <div className="mb-10 md:mb-16">
            <h2
              className="
                mb-4
                text-2xl
                font-bold
                text-center text-gray-800
                lg:text-3xl
                md:mb-6
              "
            >
              Our Team Section
            </h2>

            <p className="max-w-screen-md mx-auto text-center text-gray-500 md:text-lg">
              This is Luna Eatery, which is founded by a 5-member team. If you want to get our info, click on the icon bellow, bye ! 
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3 justify-center items-center">

            {
              teamate.map((teams)=>(

            <div className="p-4 shadow">
              <div className="h-48 mb-2 overflow-hidden rounded-lg shadow-lg md:h-80">
                <img
                  src={teams.image}
                  className="object-cover object-center w-full h-full"
                />
              </div>

              <div className="flex flex-col items-center justify-center">
                <div className="font-bold text-indigo-500 md:text-lg">{teams.name}</div>
                <p className="mb-3 text-sm text-gray-500 md:text-base md:mb-4">
                  {teams.position}
                </p>

                <div className="flex">
                  <div className="flex gap-4">
                    <a rel="noopener noreferrer" href={teams.facebook}>
                      <svg
                        className="w-6 h-6 text-blue-600 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                        />
                      </svg>
                    </a>
                    <div className="cursor-pointer">
                      <svg
                        className="w-6 h-6 text-blue-300 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                        />
                      </svg>
                    </div>
                    <div className="cursor-pointer">
                      <svg
                        className="w-6 h-6 text-blue-500 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path
                          d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

              ))
            }

           

          </div>
        </div>

      <Footer/>
      </>
    )
}
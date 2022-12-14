import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Taniya",
      email: "bonktaniya@yahoo.com",
      password: bcrypt.hashSync("admin"),
      isAdmin: true,
    },
    {
      name: "Michael",
      email: "michael@gmail.com",
      password: bcrypt.hashSync("reve"),
      isAdmin: false,
    },
  ],

  sliderItems: [
    {
      //_id: 1,
      image: "/images/slider/1.jpg",
    },
    {
      //_id: 2,
      image: "/images/slider/2.jpg",
    },
    {
      // _id: 3,
      image: "/images/slider/3.jpg",
    },
  ],
  dataDigitalBestSeller: [
    {
      id: 1,
      title: "Coaches and new technology help people find meaningful work",
      price: "",
      category:
        "Coaches and technological innovations are helping people gain the knowledge they need personally and professionally to thrive in the Future of Work.",
      linkImg:
        "https://coachuniver.ru/wp-content/uploads/2021/05/northeast-great-dane.jpg",
    },
    {
      id: 2,
      title:
        "The future of education will determine how people succeed at work",
      price: "",
      category:
        "Access to knowledge is access to opportunity.  Inclusive learning opportunities are essential for ensuring that all people dev. skills that enable flourishing at work. ",
      linkImg:
        "https://cdn.create.vista.com/api/media/medium/163711878/stock-photo-little-kids-in-library?token=",
    },
    {
      id: 8,
      title: "The core reason why people seek meaning at work",
      price: "",
      category:
        "Wisdom Weaver William Ayot explains why people want to experience meaning at work and in life. He believes that it is possible to enhance meaning at work.",
      linkImg: "https://www.shkolazhizni.ru/img/content/i134/134325_or.jpg",
    },
    {
      id: 4,
      title: "It’s time to reimagine the future of cities",
      price: "",
      category:
        "Businesses and workers are no longer bound by geographical limitations due to advances in technology and workplace behavior. It’s time to reimagine the role of cities in our lives.",
      linkImg:
        "https://cms.enjourney.ru/upload/Jana/United%20Arab%20Emirates/Dubai/Dubai21.jpg",
    },
    {
      id: 5,
      title: "Social dialog promotes shared distribution of wealth",
      price: "",
      category:
        "Wisdom Weaver and economist Stijn Broecke advocates for a healthy social dialog between workers, employers, and policy makers in order to shape a future that benefits all.",
      linkImg:
        "https://3bhuf2134ms42er36k19to8a-wpengine.netdna-ssl.com/wp-content/uploads/sites/13/2019/10/shutterstock_778307656.jpg",
    },
    {
      id: 6,
      title: "Preparing children for the future requires imagination",
      price: "",
      category:
        "Some experts believe that children under the age of five will have jobs that have not yet been invented. Preparing children for the future requires imagining possibilities that don’t exist.",
      linkImg:
        "https://cdn.create.vista.com/api/media/medium/163628486/stock-photo-kids-reading-books-in-park?token=",
    },
    {
      id: 7,
      title: "New models of learning are needed to prepare for the future",
      price: "",
      category:
        "In many ways, we are still learning methods from the last century to solve problems for the next century. To truly prepare for the future, we must change our view of learning.",
      linkImg:
        "https://assets-global.website-files.com/599873abab717100012c91ea/5e62d5486f9734019e865629_Dg_Uz27VAAAjmk-.jpg",
    },
    {
      id: 8,
      title: "Extended life spans will transform workplace norms",
      price: "",
      category:
        "Population trends will collide in the workplace—where as many as four generations will work side-by-side. New leadership competencies related to aging will emerge.",
      linkImg:
        "https://aif-s3.aif.ru/images/010/614/21a3f8dd9ebab7a0b062dcf096344bd1.jpg",
    },
    {
      id: 9,
      title: "Technological advances affect almost every aspect of work",
      price: "",
      category:
        "INSIGHT ARTICLE.Our Wisdom Weavers examined medical advances, new methods of personal development, and the biggest concern of all: equal access to technology.",
      linkImg: "https://plusiminusi.ru/wp-content/uploads/2019/07/isk1.jpg",
    },
    {
      id: 10,
      title: "Unemployment is a risk for healthy societies",
      price: "",
      category:
        "THE FUTURE OF WORK .Wisdom Weaver Stijn Broecke explains that labor markets are most successful when they are inclusive and when they enable all people to use their talents.",
      linkImg:
        "https://thumbs.dreamstime.com/b/jobless-guy-looking-job-begging-streets-covid-recession-man-asking-money-help-crisis-186974046.jpg",
    },
  ],
  category: [
    {
      // id: 1,
      title: "Kids",
      image: "/images/category/kidss.jpg",
    },
    {
      // id: 2,
      title: "Digital technologies",
      image: "/images/category/men.jpg",
    },
    {
      // id: 3,
      title: "Cosmology",
      image: "/images/category/kids.jpg",
    },
  ],

  products: [
    {
      //_id: 1, //because in mongoodb id is written as _id
      title: "Anime",
      slug: "product1",
      desc: "Description",
      category: "Kids",
      image: "/images/products/9.jpeg",
      image1: "/images/products/10.jpeg",
      image2: "/images/products/11.jpeg",
      image3: "/images/products/12.jpeg",
      countInStock: 4,
      price: "9.57",
    },
    {
      //_id: 2,
      title: "Windows 10",
      slug: "product2",
      desc: "Description",
      category: "Digital technologies",
      image: "/images/products/1.jpeg",
      image1: "/images/products/2.jpeg",
      image2: "/images/products/3.jpeg",
      image3: "/images/products/4.jpeg",
      countInStock: 5,
      price: "5.59",
    },
    {
      //_id: 3,
      title: "About Stars",
      slug: "product3",
      desc: "Description",
      category: "Cosmology",
      image: "/images/products/49.jpeg",
      image1: "/images/products/49.jpeg",
      image2: "/images/products/49.jpeg",
      image3: "/images/products/4.jpeg",
      countInStock: 2,
      price: "12.99",
    },
    {
      //_id: 4,
      title: "DigitalWorld",
      slug: "product4",
      desc: "Description",
      category: "Digital technologies",
      image: "/images/products/33.jpeg",
      image1: "/images/products/34.jpeg",
      image2: "/images/products/35.jpeg",
      image3: "/images/products/36.jpeg",
      countInStock: 4,
      price: "12.99",
    },
    {
      //_id: 5,
      title: "JavaScript",
      slug: "product5",
      desc: "Description",
      category: "Digital technologies",
      image: "/images/products/17.jpeg",
      image1: "/images/products/18.jpeg",
      image2: "/images/products/19.jpeg",
      image3: "/images/products/20.jpeg",
      countInStock: 11,
      price: "7.75",
    },
    {
      //_id: 6,
      title: "Astronomy",
      slug: "product6",
      desc: "Description",
      category: "Cosmology",
      image: "/images/products/50.jpeg",
      image1: "/images/products/4.jpeg",
      image2: "/images/products/50.jpeg",
      image3: "/images/products/50.jpeg",
      countInStock: 6,
      price: "10.57",
    },
    {
      //_id: 7,
      title: "Universe",
      slug: "product7",
      desc: "Description",
      category: "Cosmology",
      image: "/images/products/51.jpeg",
      image1: "/images/products/51.jpeg",
      image2: "/images/products/51.jpeg",
      image3: "/images/products/4.jpeg",
      countInStock: 15,
      price: "7.79",
    },
    {
      // _id: 8,
      title: "React",
      slug: "product8",
      desc: "Description",
      category: "Digital technologies",
      image: "/images/products/26.jpeg",
      image1: "/images/products/26.jpeg",
      image2: "/images/products/26.jpeg",
      image3: "/images/products/4.jpeg",
      countInStock: 13,
      price: "12.89",
    },
    {
      //_id: 9,
      title: "React Hooks",
      slug: "product9",
      desc: "Description",
      category: "Digital technologies",
      image: "/images/products/27.jpeg",
      image1: "/images/products/27.jpeg",
      image2: "/images/products/27.jpeg",
      image3: "/images/products/4.jpeg",
      countInStock: 1,
      price: "9.99",
    },
    {
      //_id: 10,
      title: "React Design",
      slug: "product10",
      desc: "Description",
      category: "Digital technologies",
      image: "/images/products/28.jpeg",
      image1: "/images/products/28.jpeg",
      image2: "/images/products/28.jpeg",
      image3: "/images/products/4.jpeg",
      countInStock: 20,
      price: "15.79",
    },
    {
      //_id: 11,
      title: "JavaScript",
      slug: "product11",
      desc: "Description",
      category: "Digital technologies",
      image: "/images/products/41.jpeg",
      image1: "/images/products/41.jpeg",
      image2: "/images/products/4.jpeg",
      image3: "/images/products/41.jpeg",
      countInStock: 11,
      price: "8.79",
    },
    {
      //_id: 12,
      title: "JavaScript",
      slug: "product12",
      desc: "Description",
      category: "Digital technologies",
      image: "/images/products/42.jpeg",
      image1: "/images/products/42.jpeg",
      image2: "/images/products/4.jpeg",
      image3: "/images/products/42.jpeg",
      countInStock: 16,
      price: "12.55",
    },
    {
      //_id: 13,
      title: "JavaScript",
      slug: "product13",
      desc: "Description",
      category: "Digital technologies",
      image: "/images/products/43.jpeg",
      image1: "/images/products/43.jpeg",
      image2: "/images/products/4.jpeg",
      image3: "/images/products/43.jpeg",
      countInStock: 12,
      price: "15.75",
    },
    {
      //_id: 14,
      title: "React",
      slug: "product14",
      desc: "Description",
      category: "Digital technologies",
      image: "/images/products/44.jpeg",
      image1: "/images/products/44.jpeg",
      image2: "/images/products/4.jpeg",
      image3: "/images/products/44.jpeg",
      countInStock: 38,
      price: "7.95",
    },
    {
      //_id: 15,
      title: "Java",
      slug: "product15",
      desc: "Description",
      category: "Digital technologies",
      image: "/images/products/45.jpeg",
      image1: "/images/products/45.jpeg",
      image2: "/images/products/4.jpeg",
      image3: "/images/products/45.jpeg",
      countInStock: 5,
      price: "11.79",
    },
    {
      //_id: 16,
      title: "JAVA",
      slug: "product16",
      desc: "Description",
      category: "Digital technologies",
      image: "/images/products/46.jpeg",
      image1: "/images/products/46.jpeg",
      image2: "/images/products/4.jpeg",
      image3: "/images/products/46.jpeg",
      countInStock: 21,
      price: "8.99",
    },
    {
      //_id: 17,
      title: "Java",
      slug: "product17",
      desc: "Description",
      category: "Digital technologies",
      image: "/images/products/47.jpeg",
      image1: "/images/products/47.jpeg",
      image2: "/images/products/4.jpeg",
      image3: "/images/products/47.jpeg",
      countInStock: 25,
      price: "7.99",
    },
    {
      //_id: 18,
      title: "Python",
      slug: "product18",
      desc: "Description",
      category: "Digital technologies",
      image: "/images/products/48.jpeg",
      image1: "/images/products/48.jpeg",
      image2: "/images/products/4.jpeg",
      image3: "/images/products/48.jpeg",
      countInStock: 7,
      price: "9.99",
    },
  ],
};

//export const

//export const

//export const
export default data;

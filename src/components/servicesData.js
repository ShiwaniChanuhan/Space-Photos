const servicesData = [
  {
    id: 1,
    title: '3D Visual tours',
    image: '/images/Visual_tours.png',
    tooltip: 'Estimated time at the property from 1h – 2h 30 min; 3D walkthrough internally and 360 panoramic images externally. The standard price includes up to 70 internal scans, £2.16 per extra scan. All Virtual tour will Include: 3D Tour Itself, 2D Snapshots, Teaser Videos,High-Resolution Floor Plan Image and 3-month free hosting (Can be extended at extra cost £10 p.m.)',
    price: 150, // Static price for 3D Visual tours
    type:'service',
    new:true
  },
  {
    id: 2,
    title: 'Property Photography',
    image: '/images/camera.png',
    tooltip: 'Estimated time at the property from 45 min to 1h 30 min;A fixed amount of 12 images without any extra images (if Choice of images is not selected);Wide-angle images only, lens (14mm – 17mm);Notes of any specific requests required;Landscape mode.',
    options: [
      { label: 'Budget option', selected: false ,image:'/images/quality option.png' },
      { label: 'Quality option', selected: true ,image:'/images/camera.png'}
    ],
    price: 100,
    type:'service',
     // Static price for Property Photography
     case:"camera",
    new:true

  },
  {
    id: 3,
    title: 'Walkthrough video',
    image: '/images/video-camera.png',
    tooltip: 'Interior walkthrough video up to 3 minFilmed with a wide-angle phone camera and image stabilizer – GimbalLandscape modeNotes of any specific requests available when placing the bookingThe video will be made available via YouTube link (Quality 720p)',
    price: 200,
    type:'service',
    new:true

     // Static price for Walkthrough video
  },
  {
    id: 4,
    title: 'Floor Plan',
    image: '/images/floorplan.png',
    tooltip: 'Properties up to 1200 sq.ft, any extra will be charged 6p per sq.ft.All floor plans are for illustrative purposes only and are not drawn to scale, all measurements are approximate.',
    options: [
      { label: 'HMO', selected: false,image:'/images/hmo.png' },
      { label: 'Illustrative', selected: true,image:'/images/floorplan.png' },
      { label: 'Lease Plan', selected: false,image:'/images/lease plan.png' }
    ],
    price: 120,
    type:'service',
     // Static price for Floor Plan
     case:"floor plan",
    new:true

  },
  {
    id: 5,
    title: 'EPC',
    image: '/images/epc.png',
    tooltip: 'EPCs tell you how energy efficient a building is and give it a rating from A (very efficient) to G (inefficient). It is a legal requirement to have a valid Energy Performance Certificate (EPC) when a building is sold, rented or constructed. Properties up to 1200 sq.ft, extra will be charged 6p per SQ.FT',
    price: 80 ,
    type:'service',
    new:true

    // Static price for EPC
  }
];

const packagedServicesData = [
  {
    id: 1,
    title: 'Photos + Floor Plan',
    images: ['/images/camera.png', '/images/floorplan.png'],
    tooltip: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    price: 150, // Static price for Photos + Floor Plan
    type:"packaged"
    
  },
  {
    id: 2,
    title: 'Photos + Video',
    images: ['/images/camera.png', '/images/video-camera.png'],
    tooltip: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    price: 220, // Static price for Photos + Video
    type:"packaged"
  },
  {
    id: 3,
    title: 'Photos + Floor Plan + Video',
    images: ['/images/camera.png', '/images/floorplan.png', '/images/video-camera.png'],
    tooltip: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    price: 329, // Static price for Photos + Floor Plan + Video
    type:"packaged"
  },
  {
    id: 4,
    title: 'Photos + Floor Plan + EPC',
    images: ['/images/camera.png', '/images/floorplan.png', '/images/epc.png'],
    tooltip: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    price: 256 ,// Static price for Photos + Floor Plan + EPC
    type:"packaged"
  },
  {
    id: 5,
    title: 'Floor Plan + EPC',
    images: ['/images/floorplan.png', '/images/epc.png'],
    tooltip: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    price: 169, // Static price for Floor Plan + EPC
    type:"packaged"
  }
];

const additionalServicesData = [
  {
    id: 1,
    title: 'Declutter the property',
    image: '/images/house.png',
    tooltip: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    price: 90, // Static price for Declutter the property
    type:"service",
    case:"camera"
  },
  {
    id: 2,
    title: 'Choice of images',
    image: '/images/images.png',
    tooltip: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    price: 60, // Static price for Choice of images
    type:"service",
    case:"camera"
  },
  {
    id: 3,
    title: 'Add furniture to floor plan',
    image: '/images/furniture.png',
    tooltip: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    price: 110, // Static price for Add furniture to floor plan
    type:"service",
    case:"floor plan"
   
  }
];

export {servicesData, additionalServicesData,packagedServicesData};

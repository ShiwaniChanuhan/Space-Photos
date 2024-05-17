const servicesData = [
  {
    id: 1,
    title: '3D Visual tours',
    image: '/images/Visual_tours.png',
    tooltip: `<h4><strong>3D Virtual Tours</strong></h4> <p>Digital space of existing property. </p>
    <iframe width="100%" height="420" src="https://my.matterport.com/show/?m=WePU339CoVG" frameborder="0" allowfullscreen allow="xr-spatial-tracking"></iframe>
<ul><li>Estimated time for work approx 1h – 2h depending on property size +/-.
The standard price includes up to 70 internal scans, £2.16 per extra scan.</li>
<li>For reference: 3 bedroom terraced house would be around 70 scans that are included in the base price.</li>
<li>3-month free hosting included thereafter £10+VAT per month.<li></ul>
<p><strong><span style="font-size: 30px; position: relative; top: 0.5rem">*</span>Estimated Turnaround Time:</strong>Within the next 2 working days.</p>`
,
    type: 'service',
    new: true
  },
  {
    id: 2,
    title: 'Property Photography',
    image: '/images/quality option.png',
    tooltip:`<h4><strong>Property Photography - Professional</strong></h4><p>Professional Photo Session offers comprehensive coverage, emphasizing both widest angles and property details, with a choice of images included before editing. Designed to highlight the property and also the details and the finishing touches. </p>
    <ul><li>Estimated time at the property up to 2 hrs.</li>
    <li>Choice from 50 images before editing, 25 edited images included</li>
    <li>Extra images can be edited at £5.40+VAT per image.</li></ul>
    <strong>Including both Wide-angle and Lifestyle images</strong>
    <p>Wide-angle Images</p>
    <ul><li>Professional photo camera</li>
    <li>With the lens in the range of 14mm – 17mm;</li>
    <li>Landscape mode.</li>
    </ul>
    <p>Lifestyle Images</p>
    <ul><li>Professional photo camera</li>
    <li>With the lens in the range of 24mm-70mm;</li>
    <li>Landscape/Portrait mode.</li>
    </ul>
   <p><strong><span style="font-size: 30px; position: relative; top: 0.5rem">*</span>Estimated Turnaround Time:</strong> Watermarked unedited Images are to be sent for choosing the
    next working day from the property visit, once you have chosen your favourites, the final edited images are to be delivered within the next 2 working days.
   </p> `,
    options: [
      { label: 'Budget option', selected: false, image:'/images/camera.png',
      tooltip:`<h4><strong>Property Photography - Basic</strong></h4><p>Basic Photography</p>
      <ul><li>Estimated time at the property 45 min - 1h 30 min depending on property size +/-.</li>
      <li>12 final edited images selected by the photographer</li>
      <li>Done by Professional Photo Camera.</li>
      <li>With a lens in the range of 14mm – 17mm.</li>
      <li>Photos are delivered in Landscape mode.</li></ul>
      <p><strong><span style="font-size: 30px; position: relative; top: 0.5rem">*</span>Estimated Turnaround Time:</strong>Within the next 2 working days.</p>`
       },
      { label: 'Quality option', selected: true, image: '/images/quality option.png',
        tooltip:`<h4><strong>Property Photography - Professional</strong></h4><p>Professional Photo Session offers comprehensive coverage, emphasizing both widest angles and property details, with a choice of images included before editing. Designed to highlight the property and also the details and the finishing touches. </p>
        <ul><li>Estimated time at the property up to 2 hrs.</li>
        <li>Choice from 50 images before editing, 25 edited images included</li>
        <li>Extra images can be edited at £5.40+VAT per image.</li></ul>
        <strong>Including both Wide-angle and Lifestyle images</strong>
        <p>Wide-angle Images</p>
        <ul><li>Professional photo camera</li>
        <li>With the lens in the range of 14mm – 17mm;</li>
        <li>Landscape mode.</li>
        </ul>
        <p>Lifestyle Images</p>
        <ul><li>Professional photo camera</li>
        <li>With the lens in the range of 24mm-70mm;</li>
        <li>Landscape/Portrait mode.</li>
        </ul>
       <p><strong><span style="font-size: 30px; position: relative; top: 0.5rem">*</span>Estimated Turnaround Time:</strong> Watermarked unedited Images are to be sent for choosing the
        next working day from the property visit, once you have chosen your favourites, the final edited images are to be delivered within the next 2 working days.
       </p> `
       }
    ],
    price: 100,
    type: 'service',

    case: "camera",
    new: true

  },
  {
    id: 3,
    title: 'Walkthrough video',
    image: '/images/video-camera.png',
    tooltip: `<h4><strong>Walkthrough Video</strong></h4><p>A recorded Property Tour for quick viewings, bridging the gap between Photography and Virtual tours. Affordable and hosted on YouTube for easy and Free sharing.</p>
    <ul><li>Interior walkthrough video length of up to 3 min</li>
    <li>Filmed with a wide-angle phone camera </li>
    <li>Using image stabilizer – Gimbal</li>
    <li>Landscape mode</li>
    <li>Video delivered via a YouTube link shared as an Unlisted </li></ul>
    <p><strong><span style="font-size: 30px; position: relative; top: 0.5rem">*</span>Estimated Turnaround Time:</strong>Within the next 2 working days.</p>`,
    price: 200,
    type: 'service',
    new: true


  },
  {
    id: 4,
    title: 'Floor Plan',
    image: '/images/floorplan.png',
    tooltip:`<h4><strong>Floorplan - For Illustrative Purposes</strong></h4><p>Visual representation of the property layout and is designed to provide a clear overview of the space. Typically used by estate agents to show the property layout, location and dimensions.</p>
    <ul><li>Estimated time at the property from 45 min to 1h 30 min depending on property size +/-
    </li>
    <li>Standard price includes properties up to 1200 sq.ft, any extra will be charged 6p per sq.ft.
</li>
<li>We measure GIA (Gross Internal Area).</li>
<li>Includes fixed furniture location.</li>    </ul>
    <p><strong><span style="font-size: 30px; position: relative; top: 0.5rem">*</span></strong>Floor plans are for illustrative purposes only and are not drawn to scale, all measurements are approximate.
    .</p>
    <p><strong><span style="font-size: 30px; position: relative; top: 0.5rem">*</span></strong>For more accurate plans please contact the office as we also do Measured House Surveys.</p>
    <p><strong><span style="font-size: 30px; position: relative; top: 0.5rem">*</span>Estimated Turnaround Time:</strong>Within the next 2 working days.</p>`
    ,
    options: [
      {
        label: 'HMO', selected: false, image: '/images/hmo.png',
        tooltip: `<h4><strong>HMO Floorplans</strong></h4><p>Detailed, scaled plan with room measurements, fire safety facilities, escape routes, and amenities for HMO licensing.</p>
     <ul><li>Estimated time at the property from 45 min to 1h 30 min depending on property size +/-</li>
     <li>Standard price includes properties up to 1200 sq.ft, any extra will be charged 6p per sq.ft</li>
     <li>Includes fixed furniture location.</li></ul> 
     <p><strong><span style="font-size: 30px; position: relative; top: 0.5rem">*</span></strong>These plans are for illustrative purposes to support the HMO application. 
        .</p>
        <p><strong><span style="font-size: 30px; position: relative; top: 0.5rem">*</span></strong>For more accurate plans please contact the office as we also do Measured House Surveys.
        .</p>
     <p><strong><span style="font-size: 30px; position: relative; top: 0.5rem">*</span>Estimated Turnaround Time:</strong>Within the next 2 working days.</p>` },
      { label: 'Illustrative', selected: true, image: '/images/floorplan.png',
        tooltip:`<h4><strong>Floorplan - For Illustrative Purposes</strong></h4><p>Visual representation of the property layout and is designed to provide a clear overview of the space. Typically used by estate agents to show the property layout, location and dimensions.</p>
        <ul><li>Estimated time at the property from 45 min to 1h 30 min depending on property size +/-<li>
        <li>Standard price includes properties up to 1200 sq.ft, any extra will be charged 6p per sq.ft.</li>
        <li>We measure GIA (Gross Internal Area).</li>
        <li>Includes fixed furniture location.</li></ul>
        <p><strong><span style="font-size: 30px; position: relative; top: 0.5rem">*</span></strong>Floor plans are for illustrative purposes only and are not drawn to scale, all measurements are approximate.
        .</p>
        <p><strong><span style="font-size: 30px; position: relative; top: 0.5rem">*</span></strong>For more accurate plans please contact the office as we also do Measured House Surveys.</p>
        <p><strong><span style="font-size: 30px; position: relative; top: 0.5rem">*</span>Estimated Turnaround Time:</strong>Within the next 2 working days.</p>`
        
       },
      {
        label: 'Lease Plan', selected: false, image: '/images/lease plan.png',
        tooltip: `<h4><strong>Lease Plan </strong></h4><p>A land registry-compliant plan showing the property location and floor plan, defining boundaries and identifying what areas of the property and land are included in the lease.</p>
      <ul><li>Estimated time at the property from 45 min to 1h 30 min depending on property size +/-</li>
      <li>Standard price includes properties up to 1200 sq.ft, any extra will be charged 6p per sq.ft</li>
      <li>Includes fixed furniture location.</li></ul> 
      <p><strong><span style="font-size: 30px; position: relative; top: 0.5rem">*</span>Estimated Turnaround Time:</strong>Within the next 2 working days.</p>` }

    ],
    price: 120,
    type: 'service',
    case: "floor plan",
    new: true

  },
  {
    id: 5,
    title: 'EPC',
    image: '/images/epc.png',
    tooltip: `<h4><strong>EPC (Energy Performance Certificate)</strong></h4><p>Similar to what you have seen on appliances the stickers A,B,C D.., an EPC is a certificate of the energy efficiency rating for a property from A (very efficient) to G (inefficient).</p>
    <ul>
    <li>Estimated time at the property from 45 min to 1h 30 min depending on property size +/-</li>
    <li>Standard price includes properties up to 1200 sq.ft, any extra will be charged 6p per sq.ft.</li></ul>
    <p><strong><span style="font-size: 30px; position: relative; top: 0.5rem">*</span>Estimated Turnaround Time:</strong>Within the next 2 working days.</p>`,
    price: 80,
    type: 'service',
    new: true

    // Static price for EPC
  }
];

const packagedServicesData = [
  {
    id: 1,
    title: 'Photos + Floor Plan',
    images: ['/images/camera.png', '/images/floorplan.png'],
    tooltip: `<h4><strong>Photos + Floorplan (package)</strong></h4><ul><li>Estimated time at the property 1h - 2h depending on property size +/-.</li></ul>
    <strong>Basic Photography</strong>
    <ul>
      <li>
      12 final edited images selected by the photographer
    
      </li>
      <li>
      Done by Professional Photo Camera.
      </li>
      <li>
      With a lens in the range of 14mm – 17mm.
    
      </li>
      <li>
      Photos are delivered in Landscape mode.
    
      </li>
    </ul>
    <strong>Floorplan - For Illustrative Purposes</strong>
    <ul>
      <li>
      Standard price includes properties up to 1200 sq.ft, any extra will be charged 6p per sq.ft.
    
      </li>
      <li>
      Floor plans are for illustrative purposes only and are not drawn to scale, all measurements are approximate.
      </li>
      <li>
      We measure GIA (Gross Internal Area)..
    
      </li>
      <li>
      Includes fixed furniture location.
    
      </li>
    </ul>
    <p><strong><span style="font-size: 30px; position: relative; top: 0.5rem">*</span>Estimated Turnaround Time:</strong>Within the next 2 working days.</p>`,
    price: 150, // Static price for Photos + Floor Plan
    type: "packaged"

  },
  {
    id: 2,
    title: 'Photos + Video',
    images: ['/images/camera.png', '/images/video-camera.png'],
    tooltip: `<h4><strong>Photos + Video (package)</strong></h4><ul><li>Estimated time at the property 1h - 2h depending on property size +/-.</li></ul>
    <strong>Basic Photography</strong>
    <ul>
      <li>
      12 final edited images selected by the photographer
    
      </li>
      <li>
      Done by Professional Photo Camera.
      </li>
      <li>
      With a lens in the range of 14mm – 17mm.
    
      </li>
      <li>
      Photos are delivered in Landscape mode.
    
      </li>
    </ul>
    <strong>Walkthrough Video</strong>
    <ul>
      <li>
     Interior walkthrough video length of up to 3 min
    
      </li>
      <li>
     Filmed with a wide-angle phone camera 
      </li>
      <li>
    Using image stabilizer – Gimbal
    
      </li>
      <li>
    Landscape mode
    
      </li>
      <li>Video delivered via a YouTube link shared as an Unlisted </li>
    </ul>
    <p><strong><span style="font-size: 30px; position: relative; top: 0.5rem">*</span>Estimated Turnaround Time:</strong>Within the next 2 working days.</p>`,
    price: 220, // Static price for Photos + Video
    type: "packaged"
  },
  {
    id: 3,
    title: 'Photos + Floor Plan + Video',
    images: ['/images/camera.png', '/images/floorplan.png', '/images/video-camera.png'],
    tooltip: `<h4><strong>Photos + Floorplans + Video (package)</strong></h4><ul><li>Estimated time at the property 1h - 2h depending on property size +/-.</li></ul>
    <strong>Basic Photography</strong>
    <ul>
      <li>
      12 final edited images selected by the photographer
    
      </li>
      <li>
      Done by Professional Photo Camera.
      </li>
      <li>
      With a lens in the range of 14mm – 17mm.
    
      </li>
      <li>
      Photos are delivered in Landscape mode.
    
      </li>
    </ul>
    <strong>Floorplan - For Illustrative Purposes</strong>
    <ul>
      <li>
      Standard price includes properties up to 1200 sq.ft, any extra will be charged 6p per sq.ft.
    
      </li>
      <li>
      Floor plans are for illustrative purposes only and are not drawn to scale, all measurements are approximate.
      </li>
      <li>
      We measure GIA (Gross Internal Area)..
    
      </li>
      <li>
      Includes fixed furniture location.
    
      </li>
    </ul>
    <strong>Walkthrough Video</strong>
    <ul>
      <li>
     Interior walkthrough video length of up to 3 min
    
      </li>
      <li>
     Filmed with a wide-angle phone camera 
      </li>
      <li>
    Using image stabilizer – Gimbal
    
      </li>
      <li>
    Landscape mode
    
      </li>
      <li>Video delivered via a YouTube link shared as an Unlisted </li>
    </ul>
    <p><strong><span style="font-size: 30px; position: relative; top: 0.5rem">*</span>Estimated Turnaround Time:</strong>Within the next 2 working days.</p>`,
    price: 329, 
    type: "packaged"
  },
  {
    id: 4,
    title: 'Photos + Floor Plan + EPC',
    images: ['/images/camera.png', '/images/floorplan.png', '/images/epc.png'],
    tooltip: `<h4><strong>Photos + Floorplan + EPC (package) </strong></h4>    <ul><li>Estimated time at the property 1h - 2h depending on property size +/-.</li></ul>
    <strong>Basic Photography</strong>
    <ul>
      <li>
      12 final edited images selected by the photographer
    
      </li>
      <li>
      Done by Professional Photo Camera.
      </li>
      <li>
      With a lens in the range of 14mm – 17mm.
    
      </li>
      <li>
      Photos are delivered in Landscape mode.
    
      </li>
    </ul>
    <strong>Floorplan - For Illustrative Purposes</strong>
    <ul>
      <li>
      Standard price includes properties up to 1200 sq.ft, any extra will be charged 6p per sq.ft.
    
      </li>
      <li>
      Floor plans are for illustrative purposes only and are not drawn to scale, all measurements are approximate.
      </li>
      <li>
      We measure GIA (Gross Internal Area)..
    
      </li>
      <li>
      Includes fixed furniture location.
    
      </li>
    </ul>
    
    <strong>EPC (Energy Performace certificate)</strong>
    <p><strong><span style="font-size: 30px; position: relative; top: 0.5rem">*</span>Estimated Turnaround Time:</strong>Within the next 2 working days.</p>`,
    price: 256,
    type: "packaged"
  },
  {
    id: 5,
    title: 'Floor Plan + EPC',
    images: ['/images/floorplan.png', '/images/epc.png'],
    tooltip: `<h4><strong>Floorplan + EPC (package) </strong></h4><strong>Floorplan - For Illustrative Purposes</strong>
    <ul>
      <li>
      Standard price includes properties up to 1200 sq.ft, any extra will be charged 6p per sq.ft.
    
      </li>
      <li>
      Floor plans are for illustrative purposes only and are not drawn to scale, all measurements are approximate.
      </li>
      <li>
      We measure GIA (Gross Internal Area)..
    
      </li>
      <li>
      Includes fixed furniture location.
    
      </li>
    </ul>
    
    <strong>EPC (Energy Performace certificate)</strong>
    <p><strong><span style="font-size: 30px; position: relative; top: 0.5rem">*</span>Estimated Turnaround Time:</strong>Within the next 2 working days.</p>`,
    price: 169,
    type: "packaged"
  }
];

const additionalServicesData = [
  {
    id: 1,
    title: 'Declutter the property',
    image: '/images/house.png',
    tooltip: `<h4><strong>Declutter the property</strong></h4><p>We will help you get rid of objects and remove possible distractions to open up the space and make it more attractive.</p>
    <ul>
      <li>
    An additional 30-minute time slot will be added to your booking.
      </li>
    </ul>
    
      <p><strong><span style="font-size: 30px; position: relative; top: 0.5rem">*
      </span></strong> Occupants' agreement to move their belongings must be agreed before booking this service.
    </p>
      <p> <strong><span style="font-size: 30px; position: relative; top: 0.5rem">*
      </span> </strong>Please note that all properties must be ready for photography before booking any of our services and this is not a cleaning service but rather a helping hand to
       get the best marketing materials for your property 
    </p>
    <p><strong><span style="font-size: 30px; position: relative; top: 0.5rem">*
      </span> </strong>Please be specific in your notes when booking if you have any specific items to be removed or not touched.
    </p>`,
    price: 90,
    type: "service",
    case: "camera"
  },
  {
    id: 2,
    title: 'Choice of images',
    image: '/images/images.png',
    tooltip: `<h4><strong>Choice of images</strong></h4><p>Will provide a selection of images from 30 watermarked images</p>
    <ul>
      <li>
      Adding 8 additional edited images to your Basic 12 Photos
      </li>
    </ul>
    
      <p><strong><span style="font-size: 30px; position: relative; top: 0.5rem">*</span>Estimated Turnaround Time:</strong> Watermarked unedited Images are to be sent for choosing the next working day from the property visit, once you have chosen your favourites, the final edited images are to be delivered within the next 2 working days.</p>
    
    `,
    price: 60,
    type: "service",
    case: "camera"
  },
  {
    id: 3,
    title: 'Add furniture to floor plan',
    image: '/images/furniture.png',
    tooltip: `<h4><strong>Add furniture to your floorplan</strong>
    </h4>
    <p>Add the layout of furniture in each room for added perspective such as beds, sofas, tables and chairs.</p>`,
    price: 110, 
    type: "service",
    case: "floor plan"

  }
];

export { servicesData, additionalServicesData, packagedServicesData };

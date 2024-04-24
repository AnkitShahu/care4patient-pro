import React from "react";
import Link from "next/link";
import Wisdom from "../../public/dental-problems-img/wisdom-teeth/Wisdom_teeth_01.png";
import ToothGap from "../../public/dental-problems-img/tooth gaps/Tooth_gaps-01.png";
import Image from "next/image";
import { Box, Grid, Typography } from "@mui/material";

const MobileContent = ({ selectedTab }) => {
  const pageData = [
    {
      title: "Wisdom Tooth Pain",
      content:
        "Wisdom teeth are the last set of molars to erupt, usually between the late teens and early twenties. When these teeth become impacted or only partially emerge, they can cause significant pain and problems.The cramped space in the back of the mouth often leaves no room for wisdom teeth to fully come in.Partially emerged teeth end up trapped against the other molars and jawbone,leading to inflammation, infection risk, and damage to nearby teeth",
      imageSrc: Wisdom,
      readMoreLink: "/dental-problems/wisdom-tooth-pain",
    },
    {
      title: "Tooth Gap",
      content: "Content for Tooth Gap page...",
      imageSrc: ToothGap,
      readMoreLink: "/dental-problems/tooth-gap",
    },
    {
      title: "Teeth Sensitivity",
      content: "Content for Tooth Gap page...",
      imageSrc: ToothGap,
      readMoreLink: "/dental-problems/tooth-gap",
    },
    {
      title: "Stained Teeth",
      content: "Content for Tooth Gap page...",
      imageSrc: ToothGap,
      readMoreLink: "/dental-problems/tooth-gap",
    },
    {
      title: "Severe Toothache",
      content: "Content for Tooth Gap page...",
      imageSrc: ToothGap,
      readMoreLink: "/dental-problems/tooth-gap",
    },
    {
      title: "Knocked Out Teeth",
      content: "Content for Tooth Gap page...",
      imageSrc: ToothGap,
      readMoreLink: "/dental-problems/tooth-gap",
    },
    {
      title: "Gum Disease",
      content: "Content for Tooth Gap page...",
      imageSrc: ToothGap,
      readMoreLink: "/dental-problems/tooth-gap",
    },
    {
      title: "Dry Socket",
      content: "Content for Tooth Gap page...",
      imageSrc: ToothGap,
      readMoreLink: "/dental-problems/tooth-gap",
    },
    {
      title: "Dental Abscess",
      content: "Content for Tooth Gap page...",
      imageSrc: ToothGap,
      readMoreLink: "/dental-problems/tooth-gap",
    },
    {
      title: "Crooked Teeth",
      content: "Content for Tooth Gap page...",
      imageSrc: ToothGap,
      readMoreLink: "/dental-problems/tooth-gap",
    },
    {
      title: "Chipped Or Cracked Tooth",
      content: "Content for Tooth Gap page...",
      imageSrc: ToothGap,
      readMoreLink: "/dental-problems/tooth-gap",
    },
    {
      title: "Bruxism",
      content: "Content for Tooth Gap page...",
      imageSrc: ToothGap,
      readMoreLink: "/dental-problems/tooth-gap",
    },
    {
      title: "Bleeding Gums",
      content: "Content for Tooth Gap page...",
      imageSrc: ToothGap,
      readMoreLink: "/dental-problems/tooth-gap",
    },
    {
      title: "Bite Problems",
      content: "Content for Tooth Gap page...",
      imageSrc: ToothGap,
      readMoreLink: "/dental-problems/tooth-gap",
    },
    {
      title: "Bad Breath",
      content: "Content for Tooth Gap page...",
      imageSrc: ToothGap,
      readMoreLink: "/dental-problems/tooth-gap",
    },
  ];

  const { title, content, imageSrc, readMoreLink } = pageData[selectedTab];

  return (
    <>
      {/* <Grid container spacing={2}>
        <Grid item xs={6} md={6}>
          <Box sx={{ p: 2 }}>
            <Typography
              variant="h5"
              component="h2"
              className="text-white"
              gutterBottom
            >
              {title}
            </Typography>
            <Typography variant="body1" className="text-white" gutterBottom>
              {content}
            </Typography>
            <Link href={readMoreLink} className="bg-blue">
              Read More..
            </Link>
          </Box>
        </Grid>
        <Grid item xs={6} md={6}>
          <Image
            src={imageSrc}
            alt="Image"
            width={450}
            height={400}
            className="img-fluid"
          />
        </Grid>
      </Grid> */}

      <div className="mobile-accordion">
        <div className="accordion" id="accordionExample">
          <div className="accordion-item d-md-block">
            <h3 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                {/* Wisdom Tooth Pain */}
                {title}
              </button>
            </h3>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p className="para">{content}</p>
                <Grid
                  item
                  xs={12}
                  md={6}
                  className="d-flex justify-content-center"
                >
                  <Image
                    src={imageSrc}
                    alt="Image"
                    width={450}
                    height={400}
                    className="img-fluid"
                  />
                </Grid>
                <Link href={readMoreLink} className="bg-blue">
                  Read More..
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileContent;

{
  /* <h1>{title}</h1>
      <p>{content}</p>
      <img src={imageSrc} alt={title} />
      <Link href={readMoreLink} className="bg-blue">
        Read More..
      </Link> */
}

//   <Box sx={{ p: 2 }}>
//         <Typography
//           variant="h5"
//           component="h2"
//           className="text-white"
//           gutterBottom
//         >
//           {title}
//         </Typography>
//         <Typography variant="body1" className="text-white" gutterBottom>
//           {content}
//         </Typography>
//       </Box>

//       <Link href={readMoreLink} className="bg-blue">
//         Read More..
//       </Link>

//       <Image src={imageSrc} alt="Image" width={450} height={400} />

// const mobilePageData = [
//   {
//     title: "Wisdom Tooth Pain",
//     content:
//       "Wisdom teeth are the last set of molars to erupt, usually between the late teens and early twenties. When these teeth become impacted or only partially emerge, they can cause significant pain and problems.The cramped space in the back of the mouth often leaves no room for wisdom teeth to fully come in.Partially emerged teeth end up trapped against the other molars and jawbone,leading to inflammation, infection risk, and damage to nearby teeth",
//     imageSrc: Wisdom,
//     readMoreLink: "/dental-problems/wisdom-tooth-pain",
//   },
//   {
//     title: "Tooth Gap",
//     content: "Content for Tooth Gap page...",
//     imageSrc: ToothGap,
//     readMoreLink: "/dental-problems/tooth-gap",
//   },
//   {
//     title: "Teeth Sensitivity",
//     content: "Content for Tooth Gap page...",
//     imageSrc: ToothGap,
//     readMoreLink: "/dental-problems/tooth-gap",
//   },
//   {
//     title: "Stained Teeth",
//     content: "Content for Tooth Gap page...",
//     imageSrc: ToothGap,
//     readMoreLink: "/dental-problems/tooth-gap",
//   },
//   {
//     title: "Severe Toothache",
//     content: "Content for Tooth Gap page...",
//     imageSrc: ToothGap,
//     readMoreLink: "/dental-problems/tooth-gap",
//   },
//   {
//     title: "Knocked Out Teeth",
//     content: "Content for Tooth Gap page...",
//     imageSrc: ToothGap,
//     readMoreLink: "/dental-problems/tooth-gap",
//   },
//   {
//     title: "Gum Disease",
//     content: "Content for Tooth Gap page...",
//     imageSrc: ToothGap,
//     readMoreLink: "/dental-problems/tooth-gap",
//   },
//   {
//     title: "Dry Socket",
//     content: "Content for Tooth Gap page...",
//     imageSrc: ToothGap,
//     readMoreLink: "/dental-problems/tooth-gap",
//   },
//   {
//     title: "Dental Abscess",
//     content: "Content for Tooth Gap page...",
//     imageSrc: ToothGap,
//     readMoreLink: "/dental-problems/tooth-gap",
//   },
//   {
//     title: "Crooked Teeth",
//     content: "Content for Tooth Gap page...",
//     imageSrc: ToothGap,
//     readMoreLink: "/dental-problems/tooth-gap",
//   },
//   {
//     title: "Chipped Or Cracked Tooth",
//     content: "Content for Tooth Gap page...",
//     imageSrc: ToothGap,
//     readMoreLink: "/dental-problems/tooth-gap",
//   },
//   {
//     title: "Bruxism",
//     content: "Content for Tooth Gap page...",
//     imageSrc: ToothGap,
//     readMoreLink: "/dental-problems/tooth-gap",
//   },
//   {
//     title: "Bleeding Gums",
//     content: "Content for Tooth Gap page...",
//     imageSrc: ToothGap,
//     readMoreLink: "/dental-problems/tooth-gap",
//   },
//   {
//     title: "Bite Problems",
//     content: "Content for Tooth Gap page...",
//     imageSrc: ToothGap,
//     readMoreLink: "/dental-problems/tooth-gap",
//   },
//   {
//     title: "Bad Breath",
//     content: "Content for Tooth Gap page...",
//     imageSrc: ToothGap,
//     readMoreLink: "/dental-problems/tooth-gap",
//   },
// ];

// export default mobilePageData;

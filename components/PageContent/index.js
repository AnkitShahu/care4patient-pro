import React from "react";
import Link from "next/link";
import Wisdom from "../../public/dental-problems-img/wisdom-teeth/Wisdom_teeth_01.png";
import ToothGap from "../../public/dental-problems-img/tooth gaps/Tooth_gaps-02.png";
import TeethSensitivity from "../../public/dental-problems-img/teeth sensitivity/teeth_sensitivity_01.png";
import StainedTeeth from "../../public/dental-problems-img/stained teeth/Stained_teeth_01.png";
import SevereToothache from "../../public/dental-problems-img/severe toothache/Severe_Toothache_01.png";
import KnockedOutTooth from "../../public/dental-problems-img/knocked out tooth/Knocked_Out_Tooth_01.png";
import DrySocket from "../../public/dental-problems-img/dry socket/Dry_socket_03.png";
import CrookedTeeth from "../../public/dental-problems-img/crooked teeth/Crooked_Teeth_01.png";
import ChippedOrCrackedTooth from "../../public/dental-problems-img/chipped or cracked tooth/Chipped_or_Cracked_Tooth_01.png";
import GumDisease from "../../public/dental-problems-img/gum disease/Gum_Disease_01.png";
import DentalAbscess from "../../public/dental-problems-img/dental abscess/Dental_Abscess_01.png";
import BiteProblems from "../../public/dental-problems-img/bite problems/Bite_problems_01.png";
import Bruxism from "../../public/dental-problems-img/bruxism/Bruxism_01.png";
import BleedingGums from "../../public/dental-problems-img/bleeding gums/Bleeding_Gums_01.png";
import BadBreath from "../../public/dental-problems-img/bad breath/bad_breath_01.png";

import Image from "next/image";
import { Box, Grid, Typography } from "@mui/material";

const PageContent = ({ selectedTab }) => {
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
      content:
        "Gaps in your teeth entail more than just an aesthetic concern. They could potentially elevate the likelihood of tooth decay and various other dental complications. Feel free to pay a visit to Carrum Downs Dental Group, where our amiable dental experts will skillfully assist you in addressing and handling the gaps within your teeth.",
      imageSrc: ToothGap,
      readMoreLink: "/dental-problems/tooth-gap",
    },
    {
      title: "Teeth Sensitivity",
      content: "Many individuals experience the challenge of tooth sensitivity issues, which can be both highly uncomfortable and exasperating. Unfortunately, many are uncertain about how to tackle this problem. Perhaps you've found yourself unable to enjoy your preferred foods due to the discomfort they trigger. Additionally, your teeth might consistently exhibit sensitivity to hot or cold beverages.",
      imageSrc: TeethSensitivity,
      readMoreLink: "/dental-problems/teeth-sensitivity",
    },
    {
      title: "Stained Teeth",
      content: "Perhaps discoloured or stained teeth have caused you to feel less confident about sharing your smile. At Carrum Downs Dental Group, we have the solution to boost your confidence.",
      imageSrc: StainedTeeth,
      readMoreLink: "/dental-problems/stained-teeth",
    },
    {
      title: "Severe Toothache",
      content: "Severe tooth pain can be agonizing, leaving you desperate for relief. At Carrum Downs Dental Group, we understand how debilitating toothaches can be. Our experienced dentists and staff are dedicated to addressing severe tooth pain quickly yet gently.",
      imageSrc: SevereToothache,
      readMoreLink: "/dental-problems/severe-toothache",
    },
    {
      title: "Knocked Out Teeth",
      content: "Losing a tooth can be distressing and painful. At Carrum Downs Dental Group, our experienced dentists know how to properly treat knocked-out teeth. We utilize advanced techniques to reimplant and stabilize the tooth so you can smile confidently again.",
      imageSrc: KnockedOutTooth,
      readMoreLink: "/dental-problems/knocked-out-tooth",
    },
    {
      title: "Gum Disease",
      content: "If you're facing issues with gum disease, Carrum Downs Dental Group is here to provide assistance. Our advanced techniques and cutting-edge facilities enable us to deliver effective gum disease treatments.",
      imageSrc: GumDisease,
      readMoreLink: "/dental-problems/gum-disease",
    },
    {
      title: "Dry Socket",
      content: "A dry socket has the potential to cause intense discomfort and pain following a tooth extraction. At Carrum Downs Dental Group, we specialize in effectively managing this condition, offering relief from the distressing pain it can bring.",
      imageSrc: DrySocket,
      readMoreLink: "/dental-problems/dry-socket",
    },
    {
      title: "Dental Abscess",
      content: "A dental abscess is a serious condition that requires prompt treatment. These infections, filled with pus, develop in the teeth, gums or jawbone and can rapidly cause swelling, severe pain, and even tooth loss if left unchecked.",
      imageSrc: DentalAbscess,
      readMoreLink: "/dental-problems/dental-abscess",
    },
    {
      title: "Crooked Teeth",
      content: "Misaligned teeth aren't solely a cosmetic concern; they can also give rise to significant oral health complications. Pursuing treatment for crooked teeth is crucial to address both aesthetic and dental considerations.",
      imageSrc: CrookedTeeth,
      readMoreLink: "/dental-problems/crooked-teeth",
    },
    {
      title: "Chipped Or Cracked Tooth",
      content: "Is your smile being affected by chipped or cracked teeth? These issues don't just impact your appearance; they can also lead to oral health problems. At Carrum Downs Dental Group, we understand how inconvenient and painful damaged teeth can be. Our experienced dentists can provide you with the care and treatment needed to repair your teeth and restore your confident, healthy smile.",
      imageSrc: ChippedOrCrackedTooth,
      readMoreLink: "/dental-problems/chipped-or-cracked-tooth",
    },
    {
      title: "Bruxism",
      content: "Bruxism is the habit of grinding or clenching your teeth, which can cause pain. It can also cause tooth wear and fractures if left unaddressed. Carrum Downs Dental Group offers treatment options to help relieve symptoms from this uncomfortable disorder.",
      imageSrc: Bruxism,
      readMoreLink: "/dental-problems/bruxism",
    },
    {
      title: "Bleeding Gums",
      content: "If your gums are experiencing frequent bleeding, this might indicate the presence of gum disease or another dental issue. At Carrum Downs Dental Group, we are dedicated to identifying the underlying cause of the bleeding and providing appropriate dental solutions to tackle the problem effectively.",
      imageSrc: BleedingGums,
      readMoreLink: "/dental-problems/bleeding-gums",
    },
    {
      title: "Bite Problems",
      content: "A bad bite alignment can lead to oral health problems if left untreated. However, seeking early intervention can prevent minor issues from progressing into more significant dental concerns. At Carrum Downs Dental Group, we provide treatments to help correct bite issues before they negatively impact your oral health and smile. ",
      imageSrc: BiteProblems,
      readMoreLink: "/dental-problems/bite-problems",
    },
    {
      title: "Bad Breath",
      content: "Halitosis, commonly known as bad breath, is a prevalent issue that can lead to feelings of embarrassment and unease in some people. At Carrum Downs Dental Group, our range of services is dedicated to tackling bad breath and providing proactive measures to maintain the overall health of your oral cavity.",
      imageSrc: BadBreath,
      readMoreLink: "/dental-problems/bad-breath",
    },
  ];
  const { title, content, imageSrc, readMoreLink } = pageData[selectedTab];

  return (
    <>
      <Grid container spacing={2}>
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
      </Grid>
    </>
  );
};

export default PageContent;

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

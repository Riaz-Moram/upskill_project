const Styles = {
    boxWidth:"XL:max-W-[1280px] w-full",

    heading2:"font-poppins font-semibold xs:text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
    paragraph:"font-poppins font-normal text-dimwhite text-[18px] leading-[30.8px]",

    flexCenter:"flex justify-center items-center",
    flexStart:"flxe justify-center items-start",

    paddingX:"sm:px-16 px-6",
    paddingY:"sm:py-16 py-6",
    padding:"sm:px-16 px-6 sm:py-12 py-4",
    marginX:"sm: mx-16 mx-6",
    marginY:"sm: my-16 my-6",
}

export const Layout = {
    Section:`flex md:flex-row flex-col ${Styles.paddingY}`,
    SectionReverse:`flex md: flex-row flex-col-reverse ${Styles.paddingY}`,
     SectionImgReverse:`flex-1 flex ${Styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
     SectionImg:`flex-1 flex ${Styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
     SectionInfo:`flex-1 ${Styles.flexStart} flex-col`,
}
export default Styles;

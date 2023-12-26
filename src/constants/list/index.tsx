import { GISThumb, LandingFLThumb, PDAMTCThumb, TastynasThumb } from "@/assets/images";

export const WORK_LIST = [
  {
    label: "Delipel Tasynas Storefront",
    thumb: TastynasThumb,
    description: (
      <p>
        I have created a storefront website for <b>delipel-tastynas</b>, a
        food-themed website created to allow users to experience the sensation
        of the best-processed pineapple in Subang.
      </p>
    ),
  },
  {
    label: "Fotolaku Landing Page",
    thumb: LandingFLThumb,
    description: (
      <p>
        <span className="font-semibold text-[#fd8703]">Fotolaku</span> is a
        company that focusing on product-photography and i have created this
        landing page focusing on introducing the products and services that
        company provides
      </p>
    ),
  },
  {
    label: "PDAM Tangerang Regency Training Center",
    thumb: PDAMTCThumb,
    description:
      "This one is an app for PDAM Tangerang Regency that used to be a training center website. The app architectures are quite huge than the other website that i've created.",
  },
  {
    label: "Geographical Information System Bandung Municipal Government",
    thumb: GISThumb,
    description: (
      <p><b>Geographical Information System</b> (GIS) is an app that i have created for Bandung Municipal Government to help people in the city know the rental status of the land they own </p>
    ),
  },
];

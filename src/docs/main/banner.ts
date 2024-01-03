import { bannerIcon1, bannerIcon2, bannerIcon3 } from "assets/imgs";
import { bannerTypes } from "utils/interfaces/main/banner";

export const BannerData: bannerTypes[] = [
  {
    img: bannerIcon1,
    backgroundColor: "--banner-primary",
    text: "자신의 뿌이유형을 알아볼 수\n있도록  솔직하게 답변하세요.",
  },
  {
    img: bannerIcon2,
    backgroundColor: "--banner-secondary",
    text: "자신의 뿌이유형이 삶의 여러\n영역에 어떤 영향을 미치는지\n알아보세요.",
  },
  {
    img: bannerIcon3,
    backgroundColor: "--banner-tertiary",
    text: "你这是什么意思？ 你上次\n不是说你不会忘记天安门而\n且必定找回民主主义吗。",
  },
];

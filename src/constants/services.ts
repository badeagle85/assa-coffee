export interface Service {
  id: string;
  title: string;
  description: string;
  imagePath: string;
  isWide?: boolean;
}

export const services: Service[] = [
  {
    id: "consulting",
    title: "전문 컨설팅",
    description: "10년 이상의 노하우를 바탕으로 한 전문적인 카페 컨설팅 서비스",
    imagePath: "/회사소개서_아싸컴퍼니_20241007.002.jpeg",
  },
  {
    id: "equipment",
    title: "최상급 장비",
    description: "최고 품질의 커피를 위한 프리미엄 커피 머신 및 장비 제공",
    imagePath: "/회사소개서_아싸컴퍼니_20241007.003.jpeg",
  },
  {
    id: "education",
    title: "바리스타 교육",
    description: "전문 바리스타의 체계적인 교육 프로그램 운영",
    imagePath: "/회사소개서_아싸컴퍼니_20241007.007.jpeg",
  },
  {
    id: "design",
    title: "홍보물 디자인",
    description: "메뉴판, 포스터 등 매장 홍보물 전문 디자인 지원",
    imagePath: "/회사소개서_아싸컴퍼니_20241007.008.jpeg",
  },
  {
    id: "custom",
    title: "주문제작",
    description: "컵 홀더, 넵킨 등 브랜드 아이덴티티에 맞는 맞춤형 제작",
    imagePath: "/회사소개서_아싸컴퍼니_20241007.009.jpeg",
  },
];

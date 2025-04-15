export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  imagePath: string;
  category: 'coffee' | 'non-coffee' | 'ice-cream' | 'snack';
};

export const menuItems: MenuItem[] = [
  // 커피 메뉴
  {
    id: 'americano',
    name: '아메리카노',
    description: '깊고 진한 에스프레소의 풍미를 느낄 수 있는 클래식한 커피',
    price: 4500,
    imagePath: '/images/menu/americano.jpg',
    category: 'coffee',
  },
  {
    id: 'cafe-latte',
    name: '카페라떼',
    description: '부드러운 우유와 에스프레소의 완벽한 조화',
    price: 5000,
    imagePath: '/images/menu/cafe-latte.jpg',
    category: 'coffee',
  },
  {
    id: 'cappuccino',
    name: '카푸치노',
    description: '에스프레소, 스팀 밀크, 그리고 풍성한 우유 거품의 클래식한 조합',
    price: 5000,
    imagePath: '/images/menu/cappuccino.jpg',
    category: 'coffee',
  },
  
  // 논커피 메뉴
  {
    id: 'green-tea-latte',
    name: '녹차 라떼',
    description: '향긋한 녹차와 부드러운 우유의 조화로운 블렌드',
    price: 5500,
    imagePath: '/images/menu/green-tea-latte.jpg',
    category: 'non-coffee',
  },
  {
    id: 'chocolate',
    name: '핫초콜릿',
    description: '진한 초콜릿과 부드러운 우유로 만든 달콤한 음료',
    price: 5500,
    imagePath: '/images/menu/chocolate.jpg',
    category: 'non-coffee',
  },
  {
    id: 'fruit-tea',
    name: '과일차',
    description: '신선한 과일로 만든 상큼한 차',
    price: 6000,
    imagePath: '/images/menu/fruit-tea.jpg',
    category: 'non-coffee',
  },
  
  // 아이스크림 메뉴
  {
    id: 'vanilla-ice',
    name: '바닐라 아이스크림',
    description: '부드럽고 달콤한 클래식 바닐라 아이스크림',
    price: 4000,
    imagePath: '/images/menu/vanilla-ice.jpg',
    category: 'ice-cream',
  },
  {
    id: 'chocolate-ice',
    name: '초콜릿 아이스크림',
    description: '진한 초콜릿 풍미가 가득한 아이스크림',
    price: 4000,
    imagePath: '/images/menu/chocolate-ice.jpg',
    category: 'ice-cream',
  },
  
  // 과자 메뉴
  {
    id: 'cookie',
    name: '초코칩 쿠키',
    description: '바삭하고 달콤한 초콜릿 칩이 가득한 쿠키',
    price: 3500,
    imagePath: '/images/menu/cookie.jpg',
    category: 'snack',
  },
  {
    id: 'croissant',
    name: '크루아상',
    description: '바삭하고 부드러운 프랑스식 크루아상',
    price: 4000,
    imagePath: '/images/menu/croissant.jpg',
    category: 'snack',
  },
];

export const categoryNames = {
  coffee: '커피',
  'non-coffee': '논커피',
  'ice-cream': '아이스크림',
  snack: '과자',
};

export type MenuCategory = keyof typeof categoryNames;

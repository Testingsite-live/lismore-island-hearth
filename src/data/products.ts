import { Product } from '@/contexts/CartContext';
import soapImage from '@/assets/product-soap.jpg';
import teaImage from '@/assets/product-herbal-tea.jpg';
import basketImage from '@/assets/product-basket.jpg';
import linenImage from '@/assets/product-linen.jpg';
import sachetImage from '@/assets/product-herb-sachet.jpg';

export const products: Product[] = [
  {
    id: 'wild-herb-sachet',
    name: 'Wild Herb Sachet',
    price: 15,
    image: sachetImage,
    description: 'Aromatic blend of Scottish wildflowers and herbs, hand-gathered from our island gardens. Perfect for wardrobes and drawers.',
    category: 'Island Essentials',
  },
  {
    id: 'artisan-soap',
    name: 'Artisan Herbal Soap',
    price: 12,
    image: soapImage,
    description: 'Handcrafted natural soap made with herbs from our physic garden. Gentle on skin, kind to nature.',
    category: 'Island Essentials',
  },
  {
    id: 'island-herbal-tea',
    name: 'Island Herbal Tea',
    price: 18,
    image: teaImage,
    description: 'Carefully dried herbs and flowers from our biodynamic garden. A soothing taste of island life.',
    category: 'Island Essentials',
  },
  {
    id: 'woven-basket',
    name: 'Handwoven Basket',
    price: 45,
    image: basketImage,
    description: 'Traditional Scottish basket, handwoven from sustainable materials. Perfect for storage or display.',
    category: 'Home Decor',
  },
  {
    id: 'natural-linen',
    name: 'Natural Linen Throw',
    price: 38,
    image: linenImage,
    description: 'Soft, sustainable linen in earth tones. Adds warmth and texture to any island-inspired home.',
    category: 'Home Decor',
  },
  {
    id: 'lavender-bundle',
    name: 'Lavender Bundle',
    price: 14,
    image: sachetImage,
    description: 'Dried Scottish lavender, hand-tied with natural twine. Brings calm and fragrance to any space.',
    category: 'Gifts',
  },
];

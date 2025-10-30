// Icon mapping for all link icons
import {
  Users,
  Calendar,
  Users2,
  Activity,
  BarChart3,
  Image,
  Mail,
  Handshake,
  ShoppingCart,
  MessageCircle,
  CreditCard,
  MessageSquare,
} from 'lucide-react';

export const iconMap = {
  users: Users,
  calendar: Calendar,
  people: Users2,
  activity: Activity,
  barChart3: BarChart3,
  image: Image,
  mail: Mail,
  handshake: Handshake,
  shoppingCart: ShoppingCart,
  messageCircle: MessageCircle,
  creditCard: CreditCard,
  messageSquare: MessageSquare,
};

export const getIcon = (iconName) => {
  return iconMap[iconName] || null;
};

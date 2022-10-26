import HomeIcon from "../assets/menu-icons/home.svg";
import SearchIcon from "../assets/menu-icons/search.svg";
import TableIcon from "../assets/menu-icons/table.svg";
import CalendarIcon from "../assets/menu-icons/calendar.svg";
import MapIcon from "../assets/menu-icons/map.svg";
import TvIcon from "../assets/menu-icons/tv.svg";
import SettingsIcon from "../assets/menu-icons/settings.svg";
import UserIcon from "../assets/menu-icons/user.svg";
import MoneyIcon from "../assets/menu-icons/money.svg";
import ExitIcon from "../assets/menu-icons/exit.svg";

const mainNavTree = [
  // {
  //   key: "main",
  //   path: `/`,
  //   title: "Меню",
  //   submenu: [
  {
    key: "home",
    path: `/`,
    title: "Главная",
    icon: HomeIcon,
    submenu: [],
  },

  {
    key: "address",
    path: `/address`,
    title: "Поиск адресов",
    icon: SearchIcon,
    submenu: [],
  },

  {
    key: "tables",
    path: `#`,
    title: "Таблицы",
    icon: TableIcon,
    submenu: [],
  },

  {
    key: "calendar",
    path: `#`,
    title: "Календарь",
    icon: CalendarIcon,
    submenu: [],
  },

  {
    key: "maps",
    path: `#`,
    title: "Карты",
    icon: MapIcon,
    submenu: [],
  },

  {
    key: "widgets",
    path: `#`,
    title: "Виджеты",
    icon: TvIcon,
    submenu: [],
  },

  {
    key: "settings",
    path: `#`,
    title: "Настройки",
    icon: SettingsIcon,
    submenu: [
      {
        key: "profile-settings",
        path: `#`,
        title: "Настройки профиля",
        icon: UserIcon,
        submenu: [],
      },

      {
        key: "money-settings",
        path: `#`,
        title: "Управление финансами",
        icon: MoneyIcon,
        submenu: [],
      },
    ],
  },

  {
    key: "exit",
    path: `#`,
    title: "Выход",
    icon: ExitIcon,
    submenu: [],
  },
  //   ],
  // },
];

const navigationConfig = [...mainNavTree];

export default navigationConfig;

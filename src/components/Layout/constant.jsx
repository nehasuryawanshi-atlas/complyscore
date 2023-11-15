import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import RateReviewIcon from "@mui/icons-material/RateReview";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import CardTravelIcon from "@mui/icons-material/CardTravel";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

export const SIDEBAR_LINKS = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/",
    icon: <DashboardIcon />,
  },
  {
    key: "vendors",
    label: "Vendor",
    path: "/vendor",
    icon: <PersonPinIcon />,
  },
  {
    key: "assessment",
    label: "Assessment",
    path: "/assessment",
    icon: <RateReviewIcon />,
  },
  {
    key: "mitigationTasks",
    label: "Mitigation Tasks",
    icon: <SupervisorAccountIcon />,
  },
  {
    key: "reports",
    label: "Reports",
    icon: <CardTravelIcon />,
  },
];

export const SIDEBAR_BOTTOM_LINKS = [
  {
    key: "needHelp",
    label: "Need help?",
    icon: <HelpOutlineIcon />,
  },
  {
    key: "contactUs",
    label: "Contact us",
    icon: <MailOutlineIcon />,
  },
];

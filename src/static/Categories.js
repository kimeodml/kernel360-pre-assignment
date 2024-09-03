import { Grip } from 'lucide-react';
import { BookOpen } from 'lucide-react';
import { MessageSquareMore } from 'lucide-react';
import { Settings } from 'lucide-react';


const CATEGORIES = [
  {
    "name": "Overview",
    "icon": <Grip />,
  },
  {
    "name": "Task",
    "icon": <BookOpen />,
  },
  {
    "name": "Message",
    "icon": <MessageSquareMore />,
  },
  {
    "name": "Settings",
    "icon": <Settings />
  }
];

export default CATEGORIES;
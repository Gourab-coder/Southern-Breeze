import type { RouteId } from './routes';
import { ContactPage } from './ContactPage';
import { ExperiencePage } from './ExperiencePage';
import { FlavorsPage } from './FlavorsPage';
import { JournalPage } from './JournalPage';
import { ReviewsPage } from './ReviewsPage';

type RouterViewProps = {
  route: RouteId;
};

export function RouterView({ route }: RouterViewProps) {
  switch (route) {
    case 'flavors':
      return <FlavorsPage />;
    case 'experience':
      return <ExperiencePage />;
    case 'reviews':
      return <ReviewsPage />;
    case 'journal':
      return <JournalPage />;
    case 'contact':
      return <ContactPage />;
    default:
      return null;
  }
}

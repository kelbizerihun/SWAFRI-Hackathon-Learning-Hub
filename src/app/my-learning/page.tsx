import { redirect } from 'next/navigation';

export default function MyLearningRedirectPage() {
  redirect('/courses?tab=my-learning');
}

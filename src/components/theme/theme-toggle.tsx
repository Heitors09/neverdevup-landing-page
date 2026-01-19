import { Moon, Sun } from 'lucide-react';
import { Button } from '../ui/button';
import { useTheme } from './theme-provider';

export const ThemeToggle = () => {
  const { setTheme, theme } = useTheme();
  return (
    <Button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      variant={'outline'}
    >
      {theme === 'light' ? <Moon /> : <Sun />}
    </Button>
  );
};

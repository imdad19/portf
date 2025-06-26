import { useLanguage } from '@/hooks/use-language';
import { Language, languageNames } from '@/lib/translations';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <i className="fas fa-globe text-[var(--portfolio-accent)] text-sm"></i>
      <Select value={language} onValueChange={(value: Language) => setLanguage(value)}>
        <SelectTrigger className="w-32 h-8 text-xs bg-transparent border-[var(--portfolio-accent)] border-opacity-30 text-white">
          <SelectValue />
        </SelectTrigger>
        <SelectContent className="bg-[var(--portfolio-card)] border-[var(--portfolio-accent)] border-opacity-30">
          {Object.entries(languageNames).map(([code, name]) => (
            <SelectItem 
              key={code} 
              value={code}
              className="text-white hover:bg-[var(--portfolio-accent)] hover:bg-opacity-20 cursor-pointer"
            >
              {name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
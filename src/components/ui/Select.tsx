import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

interface Option {
  value: string;
  label: string;
  description?: string;
  icon?: React.ReactNode;
}

interface SelectProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
}

const Select: React.FC<SelectProps> = ({
  options,
  value,
  onChange,
  placeholder = 'Select an option',
  className = '',
  disabled = false
}) => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const selectRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const selectedOption = options.find(option => option.value === value);
  const filteredOptions = options.filter(option =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearchTerm('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleToggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
      setSearchTerm('');
    }
  };

  const handleSelect = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
    setSearchTerm('');
  };

  return (
    <div ref={selectRef} className={`relative ${className}`}>
      {/* Select Button */}
      <button
        type="button"
        onClick={handleToggle}
        disabled={disabled}
        className={`
          w-full flex items-center justify-between px-4 py-3 text-left rounded-xl border transition-all duration-300
          focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500
          ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:shadow-md'}
          ${theme === 'light' 
            ? 'bg-gray-50/70 border-gray-300 text-gray-900 hover:bg-gray-100/70' 
            : 'bg-gray-700/70 border-gray-600 text-white hover:bg-gray-600/70'
          }
          ${isOpen ? 'ring-2 ring-blue-500/50 border-blue-500' : ''}
        `}
      >
        <div className="flex items-center space-x-3 min-w-0 flex-1">
          {selectedOption?.icon && (
            <div className="flex-shrink-0">
              {selectedOption.icon}
            </div>
          )}
          <div className="min-w-0 flex-1">
            <span className={`block truncate ${selectedOption ? 'font-medium' : 'text-gray-500'}`}>
              {selectedOption ? selectedOption.label : placeholder}
            </span>
            {selectedOption?.description && (
              <span className={`block text-xs truncate ${
                theme === 'light' ? 'text-gray-500' : 'text-gray-400'
              }`}>
                {selectedOption.description}
              </span>
            )}
          </div>
        </div>
        <ChevronDown 
          className={`w-5 h-5 transition-transform duration-300 flex-shrink-0 ${
            isOpen ? 'transform rotate-180' : ''
          } ${theme === 'light' ? 'text-gray-400' : 'text-gray-500'}`} 
        />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className={`
          absolute top-full left-0 right-0 mt-2 z-50 rounded-xl border shadow-2xl backdrop-blur-xl
          transform transition-all duration-300 origin-top
          ${theme === 'light' 
            ? 'bg-white/95 border-gray-200/50' 
            : 'bg-gray-800/95 border-gray-700/50'
          }
          animate-scale-in
        `}>
          {/* Search Input */}
          {options.length > 5 && (
            <div className="p-3 border-b border-gray-200/50 dark:border-gray-700/50">
              <input
                ref={inputRef}
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search options..."
                className={`
                  w-full px-3 py-2 text-sm rounded-lg border transition-all duration-200
                  focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500
                  ${theme === 'light' 
                    ? 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-500' 
                    : 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                  }
                `}
              />
            </div>
          )}

          {/* Options List */}
          <div className="max-h-60 overflow-y-auto py-2">
            {filteredOptions.length === 0 ? (
              <div className={`px-4 py-3 text-sm ${
                theme === 'light' ? 'text-gray-500' : 'text-gray-400'
              }`}>
                No options found
              </div>
            ) : (
              filteredOptions.map((option, index) => (
                <button
                  key={option.value}
                  onClick={() => handleSelect(option.value)}
                  className={`
                    w-full flex items-center justify-between px-4 py-3 text-left transition-all duration-200
                    hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500/50
                    ${option.value === value 
                      ? (theme === 'light' 
                          ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-500' 
                          : 'bg-blue-900/30 text-blue-300 border-l-4 border-blue-500'
                        )
                      : (theme === 'light' 
                          ? 'text-gray-900 hover:bg-gray-50' 
                          : 'text-white hover:bg-gray-700/50'
                        )
                    }
                  `}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-center space-x-3 min-w-0 flex-1">
                    {option.icon && (
                      <div className="flex-shrink-0">
                        {option.icon}
                      </div>
                    )}
                    <div className="min-w-0 flex-1">
                      <span className="block font-medium truncate">
                        {option.label}
                      </span>
                      {option.description && (
                        <span className={`block text-xs truncate ${
                          option.value === value
                            ? (theme === 'light' ? 'text-blue-600' : 'text-blue-400')
                            : (theme === 'light' ? 'text-gray-500' : 'text-gray-400')
                        }`}>
                          {option.description}
                        </span>
                      )}
                    </div>
                  </div>
                  {option.value === value && (
                    <Check className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  )}
                </button>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Select;
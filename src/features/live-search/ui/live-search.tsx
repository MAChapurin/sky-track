import { Icon } from '@/shared/ui'
import { cn } from '@/shared/utils'

import { useLiveSearch } from '../model/useLiveSearch'
import { useId } from 'react'

interface LiveSearchProps {
  items: string[]
}

export const LiveSearch = ({ items }: LiveSearchProps) => {
  const {
    activeIndex,
    filtered,
    handleKeyDown,
    handleSelect,
    highlightMatch,
    listRef,
    isOpen,
    onChange,
    onClear,
    onFocus,
    query,
    wrapperRef
  } = useLiveSearch(items)

  const inputId = useId()
  const listboxId = useId()

  return (
    <div ref={wrapperRef} className="relative w-full p-0.5">
      <label htmlFor={inputId} className="sr-only">
        Search
      </label>
      <div className="relative">
        <Icon
          name="search"
          className={cn(
            'absolute left-1 top-1/2 -translate-y-1/2 text-muted dark:text-muted-dark transition-colors',
            {
              ['text-foreground dark:text-foreground-dark']: query.length > 0
            }
          )}
          aria-hidden="true"
        />
        <input
          id={inputId}
          type="text"
          role="combobox"
          aria-autocomplete="list"
          aria-expanded={isOpen}
          aria-controls={listboxId}
          aria-activedescendant={
            isOpen && filtered.length > 0 ? `option-${activeIndex}` : undefined
          }
          value={query}
          placeholder="Search..."
          className={cn(
            'w-full py-2 px-8 rounded-md outline-none',
            'bg-primary dark:bg-primary-dark',
            'text-foreground dark:text-foreground-dark',
            'placeholder-muted dark:placeholder-muted-dark'
          )}
          onFocus={onFocus}
          onChange={onChange}
          onKeyDown={handleKeyDown}
        />
        {query && (
          <button
            onClick={onClear}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-muted dark:text-muted-dark hover:text-accent dark:hover:text-accent-dark"
            aria-label="Clear search input"
          >
            <Icon name="close" />
          </button>
        )}
      </div>

      {isOpen && filtered.length > 0 && (
        <ul
          id={listboxId}
          role="listbox"
          ref={listRef}
          className={cn(
            'absolute left-0 right-0 mt-1 max-h-60 overflow-auto z-50',
            'bg-secondary dark:bg-secondary-dark',
            'text-foreground dark:text-foreground-dark',
            'rounded-md shadow-lg divide-y divide-muted dark:divide-muted-dark'
          )}
        >
          {filtered.map((item, i) => (
            <li
              id={`option-${i}`}
              key={item}
              role="option"
              aria-selected={activeIndex === i}
              onClick={() => handleSelect(item)}
              className={cn(
                'px-3 py-2 cursor-pointer transition-colors',
                'bg-primary dark:bg-primary-dark',
                'text-foreground dark:text-foreground-dark',
                activeIndex === i
                  ? 'bg-background dark:bg-background-dark'
                  : 'hover:bg-accent hover:text-background dark:hover:text-background-dark'
              )}
            >
              {highlightMatch(item)}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

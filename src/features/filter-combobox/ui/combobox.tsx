'use client'
import { Icon } from '@/shared/ui'
import { cn } from '@/shared/utils'
import { useLiveSearch } from '../model/useLiveSearch'
import type { SearchParamsValueType } from '@/shared/config'

export const FilterCombobox = ({
  items,
  title,
  param
}: {
  items: string[]
  title: string
  param: SearchParamsValueType
}) => {
  const {
    activeIndex,
    filtered,
    handleKeyDown,
    handleSelect,
    listRef,
    isOpen,
    onChange,
    onClear,
    onFocus,
    query,
    wrapperRef,
    inputRef,
    selectedItem,
    onTogle
  } = useLiveSearch(items, param)

  return (
    <div
      ref={wrapperRef}
      className="relative w-full min-w-72 p-0.5"
      role="combobox"
      aria-haspopup="listbox"
      aria-owns="listbox-id"
      aria-expanded={isOpen}
    >
      <button
        type="button"
        className="w-full flex items-center justify-between px-3 py-2 rounded-md bg-primary dark:bg-primary-dark outline-none focus:bg-accent"
        onClick={onTogle}
        aria-haspopup="listbox"
        aria-controls="listbox-id"
        aria-expanded={isOpen}
      >
        <span
          className={cn(
            'text-foreground dark:text-foreground-dark',
            !selectedItem && 'opacity-50'
          )}
        >
          {title}: {query}
        </span>
        <Icon
          name="arrowDownWide"
          className={cn(
            'w-4 h-4',
            'text-foreground dark:text-foreground-dark',
            !selectedItem && 'opacity-50'
          )}
        />
      </button>

      {isOpen && (
        <div className="mt-1 relative">
          <div className="relative">
            <Icon
              name="search"
              className={cn(
                'absolute left-2 top-1/2 -translate-y-1/2 text-muted dark:text-muted-dark  transition-colors',
                {
                  ['text-foreground dark:text-foreground-dark']:
                    query.length > 0
                }
              )}
              aria-hidden="true"
            />
            <input
              ref={inputRef}
              id="search-input"
              type="text"
              role="combobox"
              aria-autocomplete="list"
              aria-controls="listbox-id"
              aria-activedescendant={
                filtered.length > 0 ? `option-${activeIndex}` : undefined
              }
              value={query}
              placeholder="Search..."
              className={cn(
                'w-full py-2 px-8 pl-10 rounded-md outline-none',
                'bg-primary dark:bg-primary-dark',
                'text-foreground dark:text-foreground-dark',
                'placeholder-muted dark:placeholder-muted-dark'
              )}
              onFocus={onFocus}
              onChange={e => onChange(e)}
              onKeyDown={e => handleKeyDown(e)}
            />
            {query && (
              <button
                onClick={onClear}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-muted hover:text-accent"
                aria-label="Clear search input"
              >
                <Icon name="close" />
              </button>
            )}
          </div>

          {filtered.length > 0 && (
            <ul
              id="listbox-id"
              role="listbox"
              ref={listRef}
              className={cn(
                'absolute left-0 right-0 mt-1 max-h-60 overflow-auto z-50',
                'bg-secondary dark:bg-secondary-dark',
                'text-foreground dark:text-foreground-dark',
                'rounded-md shadow-lg divide-y divide-muted dark:divide-muted-dark'
              )}
            >
              {filtered.map((item, index) => (
                <li
                  key={item}
                  id={`option-${index}`}
                  role="option"
                  aria-selected={activeIndex === index}
                  onMouseEnter={() => {}}
                  onClick={() => handleSelect(item)}
                  className={cn(
                    'px-3 py-2 cursor-pointer transition-colors',
                    'bg-primary dark:bg-primary-dark',
                    'text-foreground dark:text-foreground-dark',
                    activeIndex === index
                      ? 'bg-background dark:bg-background-dark'
                      : 'hover:bg-accent hover:text-background'
                  )}
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  )
}

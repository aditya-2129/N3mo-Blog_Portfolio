import type { CollectionEntry } from "astro:content"
import { createEffect, createSignal, For } from "solid-js"
import ArrowCard from "@components/ArrowCard"
import { cn } from "@lib/utils"

type Props = {
  tags: string[]
  difficulties?: string[]
  data: CollectionEntry<"blog">[]
}

const POSTS_PER_PAGE = 10

export default function Blog({ data, tags, difficulties = [] }: Props) {
  const [filter, setFilter] = createSignal(new Set<string>())
  const [difficultyFilter, setDifficultyFilter] = createSignal(new Set<string>())
  const [posts, setPosts] = createSignal<CollectionEntry<"blog">[]>([])
  const [filtersOpen, setFiltersOpen] = createSignal(false)
  const [page, setPage] = createSignal(1)

  createEffect(() => {
    const selectedTags = filter()
    const selectedDifficulties = difficultyFilter()

    setPosts(
      data.filter((entry) => {
        const matchesTags =
          selectedTags.size === 0 ||
          Array.from(selectedTags).every((value) =>
            entry.data.tags.some((tag: string) =>
              tag.toLowerCase() === String(value).toLowerCase()
            )
          )

        const entryDifficulty = (entry.data as any).difficulty as string | undefined
        const matchesDifficulty =
          selectedDifficulties.size === 0 ||
          (!!entryDifficulty &&
            Array.from(selectedDifficulties).some(
              (d) => d.toLowerCase() === entryDifficulty.toLowerCase()
            ))

        return matchesTags && matchesDifficulty
      })
    )
    setPage(1)
  })

  const totalPages = () => Math.max(1, Math.ceil(posts().length / POSTS_PER_PAGE))
  const paginatedPosts = () => {
    const start = (page() - 1) * POSTS_PER_PAGE
    return posts().slice(start, start + POSTS_PER_PAGE)
  }

  function toggleTag(tag: string) {
    setFilter((prev) => 
      new Set(prev.has(tag) 
        ? [...prev].filter((t) => t !== tag) 
        : [...prev, tag]
      )
    )
  }

  function toggleDifficulty(d: string) {
    setDifficultyFilter((prev) =>
      new Set(prev.has(d) ? [...prev].filter((t) => t !== d) : [...prev, d])
    )
  }

  function toggleFilters() {
    setFiltersOpen((prev) => !prev)
  }

  return (
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
      <div class="col-span-3 sm:col-span-1">
        {/* Mobile: Toggle button to show/hide filters */}
        <div class="sm:hidden mb-2">
          <button
            onClick={toggleFilters}
            class={cn(
              "w-full px-3 py-2 rounded border",
              "border-black/15 dark:border-white/20",
              "bg-black/5 dark:bg-white/10",
              "hover:bg-black/10 hover:dark:bg-white/15",
              "transition-colors duration-300 ease-in-out"
            )}
            aria-expanded={filtersOpen()}
          >
            {filtersOpen() ? "Hide Filters" : "Show Filters"}
          </button>
        </div>

        <div class={cn(
          "sticky top-24 flex flex-col min-h-0 max-h-[calc(100vh-6rem)]",
          !filtersOpen() && "hidden",
          "sm:flex"
        )}>        
          <div class="text-sm font-semibold uppercase mb-2 text-black dark:text-white">Filter</div>
          {difficulties.length > 0 && (
            <div class="mb-4">
              <div class="text-xs uppercase mb-1 opacity-70">Difficulty</div>
              <ul class="flex flex-wrap sm:flex-col gap-1.5">
                <For each={difficulties}>
                  {(d) => (
                    <li>
                      <button onClick={() => toggleDifficulty(d)} class={cn(
                        "w-full max-w-xs px-2 py-1 rounded",
                        "text-left whitespace-normal break-words",
                        "flex gap-2 items-center",
                        "bg-black/5 dark:bg-white/10",
                        "hover:bg-black/10 hover:dark:bg-white/15",
                        "transition-colors duration-300 ease-in-out",
                        difficultyFilter().has(d) && "text-black dark:text-white"
                      ) }>
                        <svg class={cn("size-5 fill-black/50 dark:fill-white/50", "transition-colors duration-300 ease-in-out", difficultyFilter().has(d) && "fill-black dark:fill-white")}>
                          <use href={`/ui.svg#square`} class={cn(!difficultyFilter().has(d) ? "block" : "hidden")} />
                          <use href={`/ui.svg#square-check`} class={cn(difficultyFilter().has(d) ? "block" : "hidden")} />
                        </svg>
                        {d}
                      </button>
                    </li>
                  )}
                </For>
              </ul>
            </div>
          )}
          <div class="text-xs uppercase mb-1 opacity-70">Tags</div>
          <ul class="flex flex-col gap-1.5 flex-1 min-h-0 overflow-y-auto overflow-x-hidden pr-1 mb-2 scrollbar-modern">
            <For each={tags}>
              {(tag) => (
                <li>
                  <button onClick={() => toggleTag(tag)} class={cn(
                    "w-full max-w-xs px-2 py-1 rounded",
                    "text-left whitespace-normal break-words",
                    "flex gap-2 items-center",
                    "bg-black/5 dark:bg-white/10",
                    "hover:bg-black/10 hover:dark:bg-white/15",
                    "transition-colors duration-300 ease-in-out",
                    filter().has(tag) && "text-black dark:text-white"
                  )}>
                    <svg class={cn("size-5 fill-black/50 dark:fill-white/50", "transition-colors duration-300 ease-in-out", filter().has(tag) && "fill-black dark:fill-white")}>
                      <use href={`/ui.svg#square`} class={cn(!filter().has(tag) ? "block" : "hidden")} />
                      <use href={`/ui.svg#square-check`} class={cn(filter().has(tag) ? "block" : "hidden")} />
                    </svg>
                    {tag}
                  </button>
                </li>
              )}
            </For>
          </ul>
        </div>
      </div>
      <div class="col-span-3 sm:col-span-2">
        <div class="flex flex-col">
          <div class="text-sm uppercase mb-2">
            SHOWING {paginatedPosts().length} OF {posts().length} POSTS
            {totalPages() > 1 && <span> — PAGE {page()} OF {totalPages()}</span>}
          </div>
          <ul class="flex flex-col gap-3">
            {paginatedPosts().map((post) => (
              <li>
                <ArrowCard entry={post} />
              </li>
            ))}
          </ul>
          {totalPages() > 1 && (
            <div class="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page() === 1}
                class={cn(
                  "px-4 py-2 rounded border text-sm",
                  "border-black/15 dark:border-white/20",
                  "hover:bg-black/5 hover:dark:bg-white/10",
                  "transition-colors duration-300 ease-in-out",
                  page() === 1 && "opacity-40 pointer-events-none"
                )}
              >
                ← Previous
              </button>
              <span class="text-sm text-black dark:text-white font-medium">
                {page()} / {totalPages()}
              </span>
              <button
                onClick={() => setPage((p) => Math.min(totalPages(), p + 1))}
                disabled={page() === totalPages()}
                class={cn(
                  "px-4 py-2 rounded border text-sm",
                  "border-black/15 dark:border-white/20",
                  "hover:bg-black/5 hover:dark:bg-white/10",
                  "transition-colors duration-300 ease-in-out",
                  page() === totalPages() && "opacity-40 pointer-events-none"
                )}
              >
                Next →
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

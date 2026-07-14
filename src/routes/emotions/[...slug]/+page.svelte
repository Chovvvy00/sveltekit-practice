<script lang="ts">
    import { page } from '$app/state';

   
    interface Quote {
        quote: string;
        author: string;
        category: string;
    }

    type CategoryMap = Record<string, string[]>;

   
    const categories: CategoryMap = { 
        "confused": ['wisdom','philosophy'],
        "sad": ['life', 'inspirational', 'faith', 'nature', 'death'],
        "terrified": ['truth', 'success', 'courage', 'fear'],
        "amazed": ['relationships', 'art', 'writing'],
        "happy": ['love', 'leadership'],
        "iritated": ['humor'],
        "angry": ['time','freedom'],
    };

    let quotes = $state<Quote[]>([]);
    let loading = $state<boolean>(false);
    let errorMessage = $state<string | null>(null);


    $effect(() => {
        const slug = page.params.slug;
        
       
        if (slug && slug in categories) {
            const activeCategories = categories[slug];
            fetchQuotes(activeCategories);
        } else {
            quotes = [];
            errorMessage = "Invalid category selected.";
        }
    });

    async function fetchQuotes(categoryList: string[]): Promise<void> {
        loading = true;
        errorMessage = null;
        
        try {
            const randomIndex = Math.floor(Math.random() * categoryList.length);

            console.log(randomIndex)


            // https://api.api-ninjas.com/v2/quotes?category=happiness
            const url = `https://api.api-ninjas.com/v2/quotes?categories=${categoryList[randomIndex]}`

            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "X-Api-Key": "f4bSDRAioNSuiM0xnJPdkGIdTzCW5IZ7dOL20oga",
                    // "Content-Type": "application/json"
                },
            });


            if (!response.ok) {
                throw new Error(`API Error: ${response.status} ${response.statusText}`);
            }

            // Explicitly cast the JSON response to our Quote array type
            const data: Quote[] = await response.json();
            console.log(data)
            quotes = data;
        } catch (error) {
            console.error("TypeScript Fetch Error:", error);
            errorMessage = "Failed to load quotes. Please try again later.";
            quotes = [];
        } finally {
            loading = false;
        }
    }
</script>

{#if loading}
    <p>Loading quotes...</p>
{:else if errorMessage}
    <p class="error">{errorMessage}</p>
{:else if quotes.length > 0}
    <ul>
        {#each quotes as item}
            <li>
                <blockquote>"{item.quote}"</blockquote>
                <cite>— {item.author}</cite>
            </li>
        {/each}
    </ul>
{:else}
    <p>No quotes found for this mood.</p>
{/if}

<style>
    .error {
        color: red;
        font-weight: bold;
    }
</style>

import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

const CATEGORIES: Record<string, string[]> = { 
    "confused": ['wisdom', 'philosophy'],
    "sad": ['life', 'inspirational', 'faith', 'nature', 'death'],
    "terrified": ['truth', 'success', 'courage', 'fear'],
    "amazed": ['relationships', 'art', 'writing'],
    "happy": ['love', 'leadership'],
    "iritated": ['humor'],
    "angry": ['time', 'freedom'],
};

export const load: PageServerLoad = async ({ params }) => {
    const slug = params.slug;
    const selectedCategories = CATEGORIES[slug];

    if (!selectedCategories) {
        throw error(404, 'Category not found');
    }

    // Join arrays with commas natively
    const categoryString = selectedCategories.join(',');
    
    // In production, move your API key to an environment variable (.env)
    const apiKey = "f4bSDRAioNSuiM0xnJPdkGIdTzCW5IZ7dOL20oga"; 

    try {
        const response = await fetch(`https://api.api-ninjas.com/v2/quotes?categories=${encodeURIComponent(categoryString)}`, {
            method: "GET",
            headers: {
                "X-Api-Key": apiKey,
            },
        });

        if (!response.ok) {
            throw new Error('Failed to fetch quotes');
        }

        const quotes = await response.json();
        return { quotes };

    } catch (err) {
        throw error(500, `Could not load quotes ${err}`, );
    }
};

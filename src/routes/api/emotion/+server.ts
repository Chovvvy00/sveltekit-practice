import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

const CATEGORIES: Record<string, string[]> = {
    "confused": ['wisdom', 'philosophy'],
    "sad": ['life', 'inspirational', 'faith', 'nature', 'death'],
    "terrified": ['truth', 'success', 'courage', 'fear'],
    "amazed": ['relationships', 'art', 'writing'],
    "happy": ['love', 'leadership'],
    "iritated": ['humor'],
    "angry": ['time', 'freedom'],
};

export const GET: RequestHandler = async ({ params }) => {
    const slug = params.slug;
    const selectedCategories = CATEGORIES[slug];

    if (!selectedCategories) {
        throw error(404, 'Category not found');
    }

    const categoryString = selectedCategories.join(',');

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
        return json(quotes);

    } catch (err) {
        throw error(500, `Could not load quotes ${err}`);
    }
};

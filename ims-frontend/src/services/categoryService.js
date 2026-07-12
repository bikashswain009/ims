import api from "./api";

const CATEGORY_URL = "/categories/";

/**
 * Get all categories
 */
export const getCategories = async () => {
    try {
        const response = await api.get(CATEGORY_URL);
        return response.data;
    } catch (error) {
        throw error;
    }
};

/**
 * Get category by ID
 */
export const getCategoryById = async (id) => {
    try {
        const response = await api.get(`${CATEGORY_URL}${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

/**
 * Create category
 */
export const createCategory = async (category) => {
    try {
        const response = await api.post(CATEGORY_URL, category);
        return response.data;
    } catch (error) {
        throw error;
    }
};

/**
 * Update category
 */
export const updateCategory = async (id, category) => {
    try {
        const response = await api.put(
            `${CATEGORY_URL}${id}`,
            category
        );

        return response.data;
    } catch (error) {
        throw error;
    }
};

/**
 * Delete category
 */
export const deleteCategory = async (id) => {
    try {
        const response = await api.delete(
            `${CATEGORY_URL}${id}`
        );

        return response.data;
    } catch (error) {
        throw error;
    }
};
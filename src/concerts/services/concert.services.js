/**
 * @class ConcertService
 * @description Service class for handling concert data from a static db.json file
 */
export class ConcertService {
  /**
   * Retrieves all concerts
   * @returns {Promise<Array>} Promise that resolves to an array of concerts
   */
  async getAll() {
    const res = await fetch('/db.json');
    const data = await res.json();
    return data.concerts?.data || [];
  }

  /**
   * Retrieves a concert by its ID
   * @param {string} id - The ID of the concert
   * @returns {Promise<Object|null>} Promise that resolves to the concert object or null if not found
   */
  async getById(id) {
    const all = await this.getAll();
    return all.find(concert => concert.id === id) || null;
  }

  /**
   * Creates a new concert (not supported in static mode)
   */
  create() {
    throw new Error('Create not supported in static mode');
  }

  /**
   * Updates a concert (not supported in static mode)
   */
  update() {
    throw new Error('Update not supported in static mode');
  }

  /**
   * Deletes a concert (not supported in static mode)
   */
  delete() {
    throw new Error('Delete not supported in static mode');
  }

  /**
   * Retrieves concerts by artist name (case-insensitive)
   * @param {string} name
   * @returns {Promise<Array>} Matching concerts
   */
  async getByName(name) {
    const all = await this.getAll();
    return all.filter(concert =>
      concert.artist?.some(a => a.name?.toLowerCase().includes(name.toLowerCase()))
    );
  }
}

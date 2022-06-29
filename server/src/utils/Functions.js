export const randomString = (n) => {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';

    for (let i = 0; i < n; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        result += chars[randomIndex];
    }

    return result;
}

export const handleError = (error, statusCode, response) => {
    try {
      console.error(error);
      response.status(statusCode).json({
        success: false,
        error,
        message: error.message || 'An error occured!',
        status: 'Error',
      });
    } catch (err) {
      console.error(err);
    }
  };
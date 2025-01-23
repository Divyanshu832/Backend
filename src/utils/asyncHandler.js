const asyncHandler = (handler) => {
    (req, res, next) => {
        Promise.resolve(handler(req, res, next)).catch((err) => next(err))
    }
}

export {asyncHandler}

// const asyncHandler = (handler) => async(req, res, next) => {
//     try {
//         await handler(req, res, next);
//     } catch (err) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }
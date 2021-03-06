/**
 * @apiDefine DBError
 *
 * @apiError (500) {Object} DBError
 *
 * @apiErrorExample {json} Error-Response:
 *      HTTP/1.1 500 InternalServerError
 *      {
 *          "error": "DBError",
 *          "error_details": "some DBError description",
 *          "results": {}
 *      }
 */

/**
 * @apiDefine EntryNotFound
 *
 * @apiError (404) {Object} EntryNotFound
 *
 * @apiErrorExample {json} Error-Response:
 *      HTTP/1.1 404 NotFound
 *      {
 *          "error": "EntryNotFound",
 *          "error_details": "Requested entry is not found",
 *          "results": {}
 *      }
 */

/**
 * @apiDefine EntryExists
 * @apiError (400) {Object} EntryExists entry is already in DB
 *
 * @apiErrorExample {json} Error-Response:
 *      HTTP/1.1 400 BadRequest
 *      {
 *          "error": "ExtryExists",
 *          "error_details": "This db entry already exists",
 *          "results": {"id": "21dsa2t234tdsfsr141"}
 *      }
 */
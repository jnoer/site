package jno.data;

import jno.data.entities.User;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.List;

/**
 * Root resource (exposed at "myresource" path)
 */
@Path("user")
@Produces(value = "application/json; charset=UTF-8;")
public class UserResource {

    /**
     * Method handling HTTP GET requests. The returned object will be sent
     * to the client as "text/plain" media type.
     *
     * @return String that will be returned as a text/plain response.
     */
    @GET
    public List<User> getAll() {
        return UserDAO.getAll();
    }

    @DELETE
    @Consumes({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
//    @Consumes(MediaType.APPLICATION_JSON)
    public Response deleteUser(@QueryParam("id") final String id)
//    public Response deleteUser(User user)
    {
        UserDAO.deleteUser(new Long(id));
//        UserDAO.deleteUser(user.getId());
        return Response.ok().build();
    }
}
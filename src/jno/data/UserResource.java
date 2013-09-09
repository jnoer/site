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

    @GET
    @Path("{id}")
    public User get(@PathParam("id") String id) {
        return UserDAO.getById(new Long(id));
    }

    @DELETE
    @Path("{id}")
    @Consumes({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
    public Response deleteUser(@PathParam("id") String id)
    {
        UserDAO.deleteUser(new Long(id));
        return Response.ok().build();
    }
}
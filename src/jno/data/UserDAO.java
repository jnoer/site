package jno.data;

import jno.data.entities.User;
import org.hibernate.Session;

import java.util.List;

public class UserDAO {
    public static List<User> getUserById(Long id)
    {
        Session session = HibernateListener.sessionFactory.getCurrentSession();
        session.beginTransaction();

        List<User> users =  session.createQuery("from User").list();
        session.getTransaction().commit();
        return users;
    }
}

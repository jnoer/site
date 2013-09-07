package jno.data;

import jno.data.entities.User;
import org.hibernate.Query;
import org.hibernate.Session;

import java.util.List;

public class UserDAO {
    public static List<User> getAll()
    {
        Session session = HibernateListener.sessionFactory.getCurrentSession();
        session.beginTransaction();

        List<User> users =  session.createQuery("from User").list();
        session.getTransaction().commit();
//        session.close();
        return users;
    }

    public static void deleteUser(Long userId)
    {
        Session session = HibernateListener.sessionFactory.getCurrentSession();
        session.beginTransaction();

        Query query = session.createQuery("delete from User where id = :userId");
        query.setLong("userId", userId);
        query.executeUpdate();
        session.getTransaction().commit();
//        session.close();
    }
}

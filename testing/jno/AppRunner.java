package jno;

//import com.sun.jdi.connect.Connector;

import org.eclipse.jetty.server.Connector;
import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.server.nio.SelectChannelConnector;
import org.eclipse.jetty.util.component.AbstractLifeCycle;
import org.eclipse.jetty.util.component.LifeCycle;
import org.eclipse.jetty.webapp.WebAppContext;
import org.eclipse.jetty.webapp.WebInfConfiguration;
import org.eclipse.jetty.webapp.WebXmlConfiguration;

public class AppRunner
{
    //final static Logger log = LoggerFactory.getLogger(CollectiveRunner.class);

    private static final Integer DEFAULT_PORT = 8080;
    //private static final Integer DEFAULT_SSL_PORT = 8443;

    public static void main(String[] args) throws Exception
    {
//		System.setProperty("http.proxyHost", "127.0.0.1");
//		System.setProperty("http.proxyPort", "8888");
//      System.setProperty("https.proxyHost", "127.0.0.1");
//		System.setProperty("https.proxyPort", "8888");

//        System.setProperty("org.apache.tapestry.disable-caching", "false");
//        System.setProperty("org.apache.tapestry.enable-reset-service", "true");

        Server server = new Server();

        Connector connector = new SelectChannelConnector();
        connector.setPort(getPort(args));

       // SslContextFactory sslContextFactory = new SslContextFactory("testng/collective/ui/itest/localhost-yden-us.jks");
        //sslContextFactory.setCertAlias("localhost-yden-us");
        //sslContextFactory.setKeyStorePassword("changeit");

        //SslSelectChannelConnector sslConnector = new SslSelectChannelConnector(sslContextFactory);
        //sslConnector.setPort(getSslPort(args));

        //server.setConnectors(new Connector[]{connector, sslConnector});
        server.setConnectors(new Connector[]{connector});

        WebAppContext context = new WebAppContext();
        context.setContextPath("/");
        context.setWar("web");

        context.setConfigurationClasses(new String[] { WebInfConfiguration.class.getName(), WebXmlConfiguration.class.getName() });
        context.setParentLoaderPriority(true);

        //context.setInitParameter(SessionManager.__CheckRemoteSessionEncoding, "true"); // Stops Jetty from adding 'jsessionid' URL rewriting into non-local URLs (e.g. Google OpenId redirects)

        server.setHandler(context);

        server.addLifeCycleListener(new AbstractLifeCycle.AbstractLifeCycleListener()
        {
            @Override
            public void lifeCycleStarted(LifeCycle event)
            {
                //log.info("Jetty server started");
                System.out.println("Jetty server started");
            }
        });

        server.start();

        server.join();
    }

    private static Integer getPort(String[] args)
    {
        try
        {
            String port = args[0];
            int explicitPort = Integer.parseInt(port);
            //System.setProperty(SymbolConstants.HOSTPORT, port);
            return explicitPort;
        }
        catch (Exception e)
        {
        }
        return DEFAULT_PORT;
    }

//    private static Integer getSslPort(String[] args)
//    {
//        try
//        {
//            String port = args[1];
//            int explicitSslPort = Integer.parseInt(port);
//            //System.setProperty(SymbolConstants.HOSTPORT_SECURE, port);
//            return explicitSslPort;
//        }
//        catch (Exception e)
//        {
//        }
//        return DEFAULT_SSL_PORT;
//    }
}
